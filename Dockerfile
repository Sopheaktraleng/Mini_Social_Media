FROM node:16.20.2

WORKDIR /app
ENV NODE_ENV development
COPY package.json yarn.lock ./
RUN yarn install

COPY . .

EXPOSE 3000

CMD [ "yarn", "start:dev" ]
