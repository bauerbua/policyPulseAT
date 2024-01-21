# Use an official Node.js runtime as the base image
FROM node:18-alpine AS builder

# Set the working directory in the container
WORKDIR /dist/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm ci

# Copy the entire project to the working directory
COPY . .

# Build the Angular app in production mode
RUN npm run build:prod

FROM nginx:latest AS ngi

# Copying compiled code and nginx config to different folder
COPY --from=builder /dist/src/app/dist/policy-pulse-at /usr/share/nginx/html
COPY /docker/nginx.conf  /etc/nginx/conf.d/default.conf
# Exposing a port, here it means that inside the container 
# the app will be using Port 80 while running
EXPOSE 80