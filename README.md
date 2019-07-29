&nbsp;&nbsp;&nbsp;&nbsp;
![Javascript](https://img.shields.io/badge/Javascript-blue.svg)
![Express](https://img.shields.io/badge/Express-brightgreen.svg)
![MongoDB atlas](https://img.shields.io/badge/MongoDB-atlas-ff69b4.svg)
![AWSS3](https://img.shields.io/badge/AWS-S3-lightgrey.svg)
![Heroku](https://img.shields.io/badge/Server-Heroku-blue.svg)
![Webpack](https://img.shields.io/badge/Webpack-purple.svg)
![Babel](https://img.shields.io/badge/Babel-bb2f2a.svg)
![Pug](https://img.shields.io/badge/Pug-e7e7e7.svg)
![SASS](https://img.shields.io/badge/SASS-3498db.svg)

## Synopsis

Cloning Youtube with Vanilla with NodeJS.

[[초급 풀스택] 유튜브 클론 코딩](https://academy.nomadcoders.co/courses/435438)

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy?template=https://github.com/kneeprayer/wetube-handson/)

## Pages

-   [x] Home
-   [x] Join
-   [x] Login
-   [x] Search
-   [x] User Detail
-   [x] Edit Profile
-   [x] Change Password
-   [x] Upload
-   [x] Video Detail
-   [x] Edit Video

## Gitpod

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/kneeprayer/wetube-handson)

## Installation

1. Install Docker on your OS environment
   <https://docs.docker.com/engine/installation/>
2. `cd`**somewhere**
3. `mkdir`**somename** and `cd`**somename**
4. `git clone https://github.com/kneeprayer/wetube-handson.git`
5. Change file name template.env to .env : `mv template.env .env`
6. Setup AWS S3,Heroku,MongoDB Atlas and edit your information in .env : `vi .env`
7. Install javascript modules. `yarn` or `npm install`
8. For Mac and Linux user : `chmod 755 bin/*.sh`

## How to use it

-   For developent mode using nodemon and babel server : `yarn start`

## Container shell access

### Login to nodejs container

-   `sudo docker exec -it app /bin/bash`

### Login to mongodb container and use MongoDB shell

-   `sudo docker exec -it mongodb /bin/bash`
-   `mongo`

## Viewing container logs

### nodejs container logs

-   `sudo docker logs app`

### mongodb container logs

-   The MongoDB Server log is available through Docker's container log:
-   `sudo docker logs mongodb`

## How to use it

### Only for Mac and Linux user

#### Use native Docker Command or Use this script.

-   Start Docker containers `bin/start-server.sh`
-   Stop Docker containers `bin/stop-server.sh`
-   Build Docker containers `bin/create-server.sh`
-   Delete Docker containers `bin/delete-server.sh`
-   If you want to delete Mongo data files also, you should remove data files using `rm -rf mongodb-data`

### for Windows user

#### Use native Docker Command.

-   Start Docker containers `docker-compose start`
-   Stop Docker containers `docker-compose stop`
-   Make Docker containers `docker-compose up -d`
-   Delete Docker containers `docker-compose down`

## Setting up a your Development Environment

If you want to change app or mongodb version, you should fix **docker-compose.yml** file.

## License

This project is licensed under the terms of the MIT license.
