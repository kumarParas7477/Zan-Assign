#!/bin/bash

# Stop and remove any existing containers
echo "Stopping any running containers..."
docker-compose down

# Build the frontend image
echo "Building the Docker images..."
docker-compose build

# Start the container in detached mode
echo "Starting the application..."
docker-compose up -d

# Display the status of running containers
echo "Application started. Current status:"
docker-compose ps
