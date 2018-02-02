# Yoga Position API microservice

## Introduction

A containerized yoga position API. 

## How to use

### Prerequisites

* Docker

### Istallation

Build the docker image

```
docker-compose up --build
```

### Usage

Start the docker container

```
docker-compose up
```

Run tests

```
npm run tests
```

## API reference

| Method | 			Request URL | 		info    |
| ------------- | ------------- | ------------- |
| GET | ```/api/positions``` | Gets all positions |
| GET | ```/api/positions/{{:slug}}```  | Get a single position by **slug** |
| GET | ```/api/positions/{{:slug}}/next```  | Get a positions next available moves |
| GET | ```/api/positions/{{:slug}}/next/{{:level}}```  | Get a positions next available moves by level |
| GET | ```/api/positions/level/{{:level}}```  | Get all moves by **level** |


## Technologies

* [ Node.js ](https://nodejs.org/en/)
* [Express.js](https://expressjs.com/)
* [MongoDB](https://www.mongodb.com/)
* [Mocha](https://mochajs.org/)
* [Docker](https://www.docker.com/)


## Things to do

* Unit coverage
* Authenticate database connection
* Environment Management