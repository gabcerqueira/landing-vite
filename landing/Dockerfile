FROM node:18.6


WORKDIR /app

COPY package.json .


RUN yarn install

COPY . .

RUN yarn build

EXPOSE 5173

CMD ["yarn", "dev"]