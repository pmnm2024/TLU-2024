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

# Kiểm tra trạng thái PostgreSQL
POSTGRES_CONTAINER="postgres"
echo "Checking PostgreSQL status..."
until [ "$(docker inspect -f '{{.State.Health.Status}}' $POSTGRES_CONTAINER 2>/dev/null)" == "healthy" ]; do
  echo "Waiting for PostgreSQL to be healthy..."
  sleep 3
done
echo "PostgreSQL is ready."

# Kiểm tra trạng thái Kong
KONG_CONTAINER="kong"
echo "Checking Kong status..."
if docker ps | grep -q $KONG_CONTAINER; then
  echo "Kong container is running."
else
  echo "Starting Kong container..."
  docker compose -f docker-compose.dependencies.yml up -d kong
fi

# Chờ Kong khởi tạo
echo "Waiting for Kong to initialize..."
sleep 5

# Thực hiện migrations cho Kong
echo "Running Kong migrations..."
cd ../dependencies || exit
docker compose -f docker-compose.dependencies.yml run kong kong migrations bootstrap
cd - > /dev/null

# Kiểm tra trạng thái của Kong Admin API
echo "Checking Kong Admin API..."
until curl -s http://localhost:9001 &>/dev/null; do
  echo "Waiting for Kong Admin API to be ready..."
  sleep 3
done
echo "Kong is ready and running!"

# Xóa tất cả các service và route hiện có trong Kong
echo "Deleting all existing services and routes in Kong..."
services=$(curl -s http://localhost:9001/services | jq -r '.data[].id')
for service_id in $services; do
  echo "Deleting service with ID: $service_id"
  curl -i -X DELETE http://localhost:9001/services/$service_id
done

routes=$(curl -s http://localhost:9001/routes | jq -r '.data[].id')
for route_id in $routes; do
  echo "Deleting route with ID: $route_id"
  curl -i -X DELETE http://localhost:9001/routes/$route_id
done
echo "All existing services and routes have been deleted."

# Tạo các service và route ví dụ mới trong Kong
echo "Adding example services and routes to Kong..."
curl -i -X POST http://localhost:9001/services \
  --data name=test-service \
  --data url='http://httpbin.org'

curl -i -X POST http://localhost:9001/services/test-service/routes \
  --data paths[]='/test'

echo "Example services and routes added to Kong!"

# Khởi động các service khác nếu cần

for service in "${SERVICES[@]}"; do
  echo "Starting service: $service..."
  cd ../"$service" || exit
  docker compose up -d --build
  cd - > /dev/null
done

echo "All services and dependencies have been started successfully!"
