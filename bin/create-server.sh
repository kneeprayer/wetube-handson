#!/bin/bash
if [ $1 ]; then
    case $1 in
        "dev")
            docker-compose -f docker-compose.yml up --build -d
        ;;
        "prod")
            docker-compose -f docker-compose-prod.yml up --build -d
        ;;
    esac
else
    docker-compose -f docker-compose.yml up -d
fi