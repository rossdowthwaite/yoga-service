# Yoga service

## Database connection


**Connect to mongoDB**

To start MongoDB run:

```
mongod --port 27017 --dbpath /data/db
```
or with auth

```
mongod --auth --port 27017 --dbpath ./data/db
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

## Yoga Service

Run

```
npm start
```

### Things to do

* Docker
* Unit tests
* Env file
