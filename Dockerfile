FROM node

WORKDIR /librevasco-api

COPY package.json .
RUN npm install
RUN npm i -s nodemon

COPY . /librevasco-api

EXPOSE 3000
ENV PORT=3000
ENV MONGO_SERVICE_HOST=mongo
ENV MONGO_SERVICE_PORT=27017

ENTRYPOINT [ "npm", "start" ]
