#!/bin/bash
if [ $1 ]; then
    case $1 in
        "dev")
            docker-compose -f docker-compose.yml down
        ;;
        "prod")
            docker-compose -f docker-compose-prod.yml down
        ;;
    esac
else
    docker-compose -f docker-compose.yml down
fi