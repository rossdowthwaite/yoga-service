require('dotenv').config()
const server = require('./server/server')
const repository = require('./repository/repository')
const db = require('./config/mongo')

db.connect().then( db => {
  repository.connect( db )
    .then( repo => {
      console.log('Repository Connected. Starting Server...');
      return server.start({ repo })
    })
    .then( app => {
      console.log(`Server started succesfully, running on port: ${process.env.DATABASE_PORT}`)
      app.on('close', () => {
        repo.disconnect()
      })
    })
    .catch( (err) => {
      console.log('Repository error:', err)
    })
}).catch( (err) => {
  console.log('db connection error:', err)
})
