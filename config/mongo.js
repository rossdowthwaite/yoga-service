const mongoose = require('mongoose')

const connect = () => {
    return mongoose.connect(process.env.DATABASE_URL)
      .then( connection => {
          console.log('Connected to database')
          return connection
      })
      .catch(err => {
          console.error('App starting error:', err);
          process.exit(1);
      });
}

module.exports = Object.assign({}, {connect})
