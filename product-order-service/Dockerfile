# Dockerfile
FROM node:20-alpine

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy package.json and install dependencies
COPY package*.json ./
RUN pnpm install

# Copy source code
COPY . .

# Build the project
RUN pnpm run build

EXPOSE 3000

# Start NestJS app
# CMD ["node", "dist/main.js"]
# Run in development mode (watch mode)
CMD ["pnpm", "run", "start:dev"]
