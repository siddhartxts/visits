FROM node:alpine

WORKDIR /app

COPY package.json .
RUN npm install 
COPY . . 

CMD ["npm", "start"]
EXPOSE 3000
# This Dockerfile sets up a Node.js application with Express and Redis dependencies.
# It uses an Alpine Linux base image for a lightweight container.                               