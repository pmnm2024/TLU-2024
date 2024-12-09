/**
 * Copyright (c) ATA_TLU.
 *
 * This source code is licensed under the GPL V3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
#!/bin/bash

# Tạo Docker network nếu chưa tồn tại
NETWORK_NAME="app-network"
if ! docker network ls | grep -q $NETWORK_NAME; then
  echo "Creating Docker network: $NETWORK_NAME..."
  docker network create $NETWORK_NAME
else
  echo "Docker network $NETWORK_NAME already exists."
fi

# Khởi động dependencies
echo "Starting dependencies (Redis, RabbitMQ, PostgreSQL, Kong)..."
cd ../dependencies || exit
docker compose -f docker-compose.dependencies.yml up -d
cd - > /dev/null

# Chờ dependencies khởi tạo xong
echo "Waiting for dependencies to be ready..."
sleep 10  # Điều chỉnh thời gian chờ nếu cần

# Khởi động các service khác nếu cần
SERVICES=("user-service" "mail-service" "langchain" "fcm-service" "notification-service")
# SERVICES=("fcm-service")
for service in "${SERVICES[@]}"; do
  echo "Starting service: $service..."
  cd ../"$service" || exit
  docker compose up -d --build
  cd - > /dev/null
done

echo "All services and dependencies have been started successfully!"
