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
echo "Starting dependencies (Redis, RabbitMQ)..."
cd ../dependencies || exit
docker compose -f docker-compose.dependencies.yml up -d
cd - > /dev/null

# Chờ dependencies khởi tạo xong
echo "Waiting for dependencies to be ready..."
sleep 5
# DEPENDENCIES=("redis" "rabbitmq" "notification-db")

# for dependency in "${DEPENDENCIES[@]}"; do
#   echo "Checking $dependency..."
#   until [ "$(docker inspect -f '{{.State.Health.Status}}' $dependency 2>/dev/null)" == "healthy" ]; do
#     echo "Waiting for $dependency to be healthy..."
#     sleep 3
#   done
#   echo "$dependency is ready."
# done


# # Khởi động từng service
SERVICES=("user-service" "mail-service" "notification-service")
for service in "${SERVICES[@]}"; do
  echo "Starting service: $service..."
  cd ../"$service" || exit
  docker compose up -d --build
  cd - > /dev/null
done

echo "All services and dependencies have been started successfully!"
