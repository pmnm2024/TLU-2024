# Use the official Node.js image.
FROM node:20.5-alpine

# Set the working directory.
WORKDIR /app

# Copy main package.json and package-lock.json.
COPY package.json ./

# Install main dependencies.
RUN npm install

# Copy plugins' package.json and package-lock.json.
COPY plugins/jwt-decoder/package.json plugins/jwt-decoder/package-lock.json ./plugins/jwt-decoder/
COPY plugins/logging/package.json plugins/logging/package-lock.json ./plugins/logging/

# Install plugin dependencies in a single RUN command.
RUN npm install ./plugins/jwt-decoder \
    && npm install ./plugins/logging

# Copy the rest of the application code.
COPY . .

# Set environment variable to production.
ENV NODE_ENV=production

# Expose the port the application runs on.
EXPOSE 9000

# Command to run the application.
CMD ["node", "server.js"]
