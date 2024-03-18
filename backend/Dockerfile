# Use Node.js LTS (Long Term Support) image as the base image
FROM node:lts-alpine

# Install pnpm globally
RUN npm install -g pnpm

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and pnpm-lock.yaml (or pnpmfile.js if present)
COPY package.json pnpm-lock.yaml* pnpmfile.js* ./

# Install dependencies using pnpm
RUN pnpm install

# Copy the rest of the application code
COPY . .

# Expose the port that the app runs on
EXPOSE 3000

# Command to run the application
CMD ["pnpm", "start:dev"]