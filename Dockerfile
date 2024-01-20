# Use an official Node.js runtime as the base image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the entire project to the working directory
COPY . .

# Build the Angular app in production mode
RUN npm run build:prod

# Expose the port on which the app will run
EXPOSE 80

# Start the Angular app
CMD ["npm", "run", "start"]
