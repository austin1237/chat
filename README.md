# chat 
[![CircleCI](https://circleci.com/gh/austin1237/chat.svg?style=svg)](https://circleci.com/gh/austin1237/chat)<br />
super simple chat app (that is basically a single chat room)

## Prerequistes
You must have the following installed/configured for this to work correctly<br />
1. [Docker](https://www.docker.com/community-edition)
2. [Docker-Compose](https://docs.docker.com/compose/)


## Development environment
To spin up the entire development environment(client, server, db) simply do the follow from the root level of the repo
```bash
docker-compose up
```

## Client
The web app runs on http://localhost:3000

## Server
The api runs on http://localhost:3001

## DB
The DB runs on http://localhost:3306



### Automation CI
This project uses [CircleCI](https://circleci.com/) [workflows](https://circleci.com/docs/2.0/workflows/) for CI. The configuration for this is in .circleci directory.

