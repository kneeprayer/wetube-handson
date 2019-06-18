#!/bin/bash
if [ $1 ]; then
    case $1 in
        "dev")
            docker-compose -f docker-compose.yml start
        ;;
        "prod")
            docker-compose -f docker-compose-prod.yml start
        ;;
    esac
else
    docker-compose -f docker-compose.yml start
fi