FROM node:alpine

WORKDIR /api

# install deps
COPY package.json .
RUN npm install

# copy source files
COPY . .

EXPOSE 8085

ENTRYPOINT node
CMD [ "server.js" ]