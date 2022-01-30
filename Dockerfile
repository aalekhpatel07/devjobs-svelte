FROM node:16 as dev
WORKDIR /app

COPY package*.json ./
COPY *.config.js ./
COPY tsconfig.json ./

COPY assets ./assets
COPY public ./public

RUN ["npm", "install"]

COPY . .
RUN ["npm", "run", "build"]

FROM nginx as serve
RUN apt-get update -y 
RUN apt-get upgrade -y
RUN su -
RUN apt-get install -y vim bat sudo

COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=dev /app/public /usr/share/nginx/html
