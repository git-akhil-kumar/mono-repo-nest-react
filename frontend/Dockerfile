# Use Node.js LTS (Long Term Support) image as the base image
FROM node:lts-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock if you're using yarn)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app for production
RUN npm run build

# Expose port 80 for serving the application
EXPOSE 3000

# Command to serve the application using serve package
CMD ["npx", "serve", "-s", "-l", "3000", "build"]