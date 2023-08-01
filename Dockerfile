# Use an official Node.js runtime as the base image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the remaining app files to the container
COPY . .

# Build the React app
RUN npm run build

# Set the command to start the React app
CMD ["npm", "start"]