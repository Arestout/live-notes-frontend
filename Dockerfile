FROM node:12.21.0-alpine3.12 AS base
WORKDIR /app
COPY package*.json ./
RUN npm install && npm cache clean --force
COPY . .
CMD ["npm", "start"]