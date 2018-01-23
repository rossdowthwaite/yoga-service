var MongoClient = require('mongodb').MongoClient

const connect = () => {
    return MongoClient.connect(process.env.DATABASE_URL)
      .then( connection => {
          console.log('Connected to database')
          return connection.db(process.env.DATABASE_NAME);
      })
      .catch(err => {
          console.error('App starting error:', err);
          process.exit(1);
      });
}

module.exports = Object.assign({}, {connect})
