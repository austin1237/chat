FROM node:10.16.2

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package.json /app
# For npm@5 or later, copy package-lock.json as well
# COPY package.json package-lock.json ./

RUN npm install

# Bundle app source
COPY . .