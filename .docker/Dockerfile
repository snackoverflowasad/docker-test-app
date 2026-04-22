# base image
FROM ubuntu

# install nodejs/package manager
RUN apt-get update
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_18.x | bash -
RUN apt-get upgrade -y
RUN apt-get install -y nodejs

# copy dependency files and install dependencies
COPY package.json package.json
COPY package-lock.json package-lock.json
COPY server.js server.js

RUN npm install

# execute the application
ENTRYPOINT ["node", "server.js"]