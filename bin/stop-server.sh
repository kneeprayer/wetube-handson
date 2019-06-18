#!/bin/bash
if [ $1 ]; then
    case $1 in
        "dev")
            docker-compose -f docker-compose.yml stop
        ;;
        "prod")
            docker-compose -f docker-compose-prod.yml stop
        ;;
    esac
else
    docker-compose -f docker-compose.yml stop
fi