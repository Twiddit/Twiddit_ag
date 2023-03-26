FROM node:carbon-slim

# Create app directory
RUN npm i -g nodemon
RUN mkdir -p /home/app

WORKDIR /home/app

# Install app dependencies
COPY package.json /home/app
RUN npm install

# Bundle app source
COPY . /home/app
RUN npm run prepublish

CMD [ "npm", "run", "runServer" ]
