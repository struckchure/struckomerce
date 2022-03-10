FROM node:14-slim

WORKDIR /app

# install pm2

RUN yarn global add pm2

COPY package.json package.json

RUN yarn

COPY . .

RUN yarn build
