/**
 * Copyright (c) ATA_TLU.
 *
 * This source code is licensed under the GPL V3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
#!/bin/bash

# Dừng từng service
SERVICES=("user-service" "mail-service" "langchain" "fcm-service" "notification-service")
echo "Stopping all services..."
for service in "${SERVICES[@]}"; do
  echo "Stopping service: $service..."
  cd ../"$service" || exit
  docker compose down
  cd - > /dev/null
done

# Dừng dependencies
echo "Stopping dependencies (Redis, RabbitMQ)..."
cd ../dependencies || exit
docker compose -f docker-compose.dependencies.yml down
cd - > /dev/null

# Xóa Docker network
NETWORK_NAME="app-network"
if docker network ls | grep -q $NETWORK_NAME; then
  echo "Removing Docker network: $NETWORK_NAME..."
  docker network rm $NETWORK_NAME
else
  echo "Docker network $NETWORK_NAME does not exist."
fi

echo "All services and dependencies have been stopped and cleaned up!"
