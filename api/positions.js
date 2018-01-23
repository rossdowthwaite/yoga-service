const status = require('http-status')
var express = require('express');

module.exports = (app, options) => {
  const {repo} = options

  app.get('/', (req, res, next) => {
    res.send({title:'hello world'})
  })

  app.get('/positions', (req, res, next) => {
    repo.getAllPositions()
      .then( positions => {
        res.status(status.OK).json(positions)
      })
      .catch(next)
  })

  app.get('/positions/:name/', (req, res, next) => {
    repo.getPositionByName(req.params)
      .then( position => {
        res.send(position);
      })
      .catch(next)
  })
}
