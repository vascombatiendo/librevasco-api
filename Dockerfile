FROM ubuntu
RUN apt-get update
RUN apt-get install -y nodejs npm

WORKDIR /librevasco

ENV NODE_ENV="test"
ENV MONGO_URI="mongodb://172.17.0.2:27017/bibliovasca"
ADD config config
ADD models models
ADD routes routes
ADD server server
COPY package.json .
RUN npm install
ENTRYPOINT [ "npm", "start" ]
