# Gems App MERN Fullstack
A full-stack MERN (MongoDB, Express, React, Node.js) application containerized with Docker for easy setup and deployment. This project was developed while following the Udemy course *“React, NodeJS, Express & MongoDB – The MERN Fullstack Guide (https://www.udemy.com/course/react-nodejs-express-mongodb-the-mern-fullstack-guide/)”*.

## Features
- REST API for users and gems.
- React frontend fetching data from backend.
- MongoDB database.
- Dockerized for easy development and deployment.
- Backend waits for MongoDB using wait-for-it.sh.

## Getting Started
### Prerequisites
- Docker
- Docker Compose

## Installation
1. Clone the repository:
```sh
git clone git@github.com:Jozefcvik/GemsAppFullstack_MERN.git
cd GemsAppFullstack_MERN
```

2. Ensure BACKEND/wait-for-it.sh is present:
```sh
cd BACKEND
curl -o wait-for-it.sh https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh
chmod +x wait-for-it.sh
cd ..
```

3. Build and start all services:
```sh
docker compose build
docker compose up -d
```

4. Access the app:
- Frontend: http://localhost:3000/
- Backend API: http://localhost:5000/api

## Docker Services
- **mongodb** → Database
- **backend** → Node.js / Express API
- **frontend** → React app with Nginx

## Notes
- Backend waits for MongoDB to be ready before starting.
- Use `.env` files in **BACKEND** and **FRONTEND** for configuration.

## API Endpoints

| Method | Endpoint     | Description       |
| ------ | ------------ | ----------------- |
| GET    | `/api/users` | Fetch all users   |
| GET    | `/api/gems`  | Fetch all gems    |

### Example using curl:
```sh
# Get all users
curl http://localhost:5000/api/users

# Get all gems
curl http://localhost:5000/api/gems
```

### Stop & Remove Containers
```sh
docker compose down
```
