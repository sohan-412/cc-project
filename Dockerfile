FROM node:12.2.0-alpine

WORKDIR /
COPY package.json ./
RUN npm install
COPY . .
CMD ["node","index.js"]
EXPOSE 3001