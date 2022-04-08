#base image
FROM node:latest

WORKDIR /sgm
COPY ./package.json ./
RUN npm install 
COPY ./ ./
