# Backend Dockerfile
FROM node:20-alpine

WORKDIR /app

# Install bash (optional) in case wait-for-it.sh uses it
RUN apk add --no-cache bash

# Copy package files first for caching
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy app source code
COPY . .

# Copy wait-for-it script (download it once and save in BACKEND folder)
COPY wait-for-it.sh ./
RUN chmod +x wait-for-it.sh

# Expose port
EXPOSE 5000

# Start backend only after MongoDB is ready
CMD ["sh", "-c", "./wait-for-it.sh mongodb:27017 -- node app.js"]