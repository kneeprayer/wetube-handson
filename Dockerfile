# pull a node image from docker hub
FROM node:latest
# set the working dir to /app
WORKDIR /app
# copy package.json to the container
COPY package.json package.json
# install yarn
RUN npm install -g yarn
#  install package.json modules in container
RUN yarn
# copy everything to container /app
COPY . .
# expose port 3000 to mount it to another port in local machine
EXPOSE 4000
# start server inside container
CMD [ "yarn", "start" ]