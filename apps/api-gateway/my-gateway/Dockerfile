# Use the official Node.js image.
FROM node:20.5-alpine

# Set the working directory.
WORKDIR /app

RUN npm config set registry https://registry.npmjs.org/ \
  && npm config set fetch-retry-mintimeout 600000 \
  && npm config set fetch-retry-maxtimeout 1200000 \
  && npm config set fetch-timeout 1800000 \
  && npm cache clean --force

# Copy package.json and package-lock.json.
COPY package.json ./

# Install dependencies.

RUN npm install 
# Copy the rest of the application code.
COPY . .

RUN npm install ./plugins/jwt-decoder

RUN npm install ./plugins/logging


# Expose the port the application runs on.
EXPOSE 9000

# Set the environment variable to production.
# ENV NODE_ENV=production

# Command to run the application.
CMD ["node", "server.js"]
