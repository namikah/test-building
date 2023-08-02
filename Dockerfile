# Use the official Node.js image as the base image
FROM node:14

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json for dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the React app files
COPY . .

# Build the React app
RUN npm run build

# Install serve to run the production build
RUN npm install -g serve

# Set the command to run the production build using serve
CMD ["serve", "-s", "build"]

# Expose the port that serve will be running on
EXPOSE 3000