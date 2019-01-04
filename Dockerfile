FROM nginx:alpine

RUN apk update
RUN apk add npm

WORKDIR /app
COPY . /app

RUN npm install
EXPOSE 3000
CMD npm start