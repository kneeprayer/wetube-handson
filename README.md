## Synopsis

Cloning Youtube with Vanilla with NodeJS.

[[초급 풀스택] 유튜브 클론 코딩](https://academy.nomadcoders.co/courses/435438)

## Pages

-   [ ] Home
-   [x] Join
-   [x] Login
-   [x] Search
-   [ ] User Detail
-   [x] Edit Profile
-   [x] Change Password
-   [x] Upload
-   [ ] Video Detail
-   [x] Edit Video

## Installation

1. `git clone https://github.com/kneeprayer/kakao-clone-handson.git`
2. `yarn install`

## How to use it

-   For developent mode using nodemon and babel server : `yarn start`

## Gitpod

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/kneeprayer/wetube-handson)

## Installation

1. Install Docker on your OS environment
   <https://docs.docker.com/engine/installation/>
2. `cd`**somewhere**
3. `mkdir`**somename** and `cd`**somename**
4. `git clone https://github.com/kneeprayer/wetube-handson.git`
5. For Mac and Linux user : `chmod 755 bin/*.sh`
6. docker-compose up -d

## Login to Django container

-   `sudo docker exec -i -t /bin/bash`

## How to use it

### Only for Mac and Linux user

#### Use native Docker Command or Use this script.

-   Start Docker containers `bin/start-server.sh`
-   Stop Docker containers `bin/stop-server.sh`
-   Build Docker containers `bin/create-server.sh`
-   Delete Docker containers `bin/delete-server.sh`
-   If you want to delete MySQL database file also, you should remove data volume using `docker volume rm mongodb-data`

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
