#!/bin/bash

# Navigate to project directory
cd Desktop/Sonex-VoiceCraft

# Install frontend dependencies
echo "Installing frontend dependencies..."
npm install

# Build frontend
echo "Building frontend..."
npm run build

# Install backend dependencies
echo "Installing backend dependencies..."
cd server
npm install

# Return to project directory
cd ..

echo "Build completed successfully!"
