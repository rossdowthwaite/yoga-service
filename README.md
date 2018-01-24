# Yoga service

## API

| Method | 			Request URL | 		info    |
| ------------- | ------------- | ------------- |
| GET | ```/api/positions``` | Gets all positions |
| GET | ```/api/positions/{{:slug}}```  | Get a single position by **slug** |
| GET | ```/api/positions/{{:slug}}/next```  | Get a positions next available moves |
| GET | ```/api/positions/{{:slug}}/next/{{:level}}```  | Get a positions next available moves by level |
| GET | ```/api/positions/level/{{:level}}```  | Get all moves by **level** |

## Docker

Build the image

```
docker build -t yoga-service .
```

Start the container

``` 
docker run -p 8081:8081 yoga-service
```


## Setup
#### Database connection - MongoDB


To start MongoDB run:

```
mongod --port 27017 --dbpath {app_root_path}/data/db
```
or with auth

```
mongod --auth --port 27017 --dbpath {app_root_path}/data/db
```

**Connect to mongoDB Shell**

To open the shell run:

```
mongo --port 27017

```
or with auth

```
mongo --port 27017 -u "admin" -p "password" --authenticationDatabase "admin"
```

[Shell command list](https://docs.mongodb.com/manual/reference/mongo-shell/)

**Seed the database**

```
mongoimport --db yoga-service --collection positions --drop --file ./config/seed-dataset.json --jsonArray
```

### Yoga Service - Node.js

Run the microservice:

```
npm start
```

Run unit tests:

```
npm test
```

## Technologies

* Node.js
* Express.js
* MongoDB
* Mocha


## Things to do

* Docker
* More Unit tests