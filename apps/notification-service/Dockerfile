# Base image
FROM node:20.18.0

# Set working directory
WORKDIR /app

# Copy package.json và package-lock.json
COPY package*.json ./

# Cài đặt tất cả dependencies
RUN npm install

# Copy toàn bộ mã nguồn
COPY . .

# Install Prisma CLI để có thể phát triển và chỉnh sửa schema
RUN npm install -g prisma

# generate the prisma client based on the schema
RUN npm run prisma:generate

# generate the prisma client based on the schema
RUN npx prisma generate

# Expose cổng để kết nối đến container
ENV PORT=8001
EXPOSE ${PORT}

# Set NODE_ENV thành development
ENV NODE_ENV=development

# Lệnh khởi chạy ứng dụng trong chế độ dev
CMD [ "npm", "run", "start:watch" ]
