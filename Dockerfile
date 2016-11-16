FROM node:4.4.0

RUN mkdir /src && mkdir /src/config

RUN npm i nodemon -g

WORKDIR /src

ADD package.json /src/package.json

RUN npm i 

ADD config/nodemon.json /src/config/nodemon.json

EXPOSE 5000

CMD npm start