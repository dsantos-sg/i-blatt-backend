FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3456

CMD [ "node", "/app/src/server.js" ]
