const status = require('http-status')
var express = require('express');

module.exports = (app, options) => {
  const {repo} = options

  app.get('/', (req, res, next) => {
    res.send({title:'hello world'})
  })

  app.get('/api/positions', (req, res, next) => {
    repo.getAllPositions()
      .then( positions => {
        res.status(status.OK).json(positions)
      })
      .catch(next)
  })

  app.get('/api/positions/:slug/', (req, res, next) => {
    repo.getPositionBySlug(req.params)
      .then( position => {
        res.status(status.OK).json(position)
      })
      .catch(next)
  })

  app.get('/api/positions/:slug/next', (req, res, next) => {
    repo.getNextMoves(req.params)
      .then( moves => {
        res.status(status.OK).json(moves)
      })
      .catch(next)
  })

  app.get('/api/positions/:slug/next/:level', (req, res, next) => {
    repo.getNextMovesByLevel(req.params)
      .then( moves => {
        res.status(status.OK).json(moves)
      })
      .catch(next)
  })

  app.get('/api/positions/level/:level', (req, res, next) => {
    repo.getPositionsByLevel(req.params)
      .then( positions => {
        res.status(status.OK).json(positions)
      })
      .catch(next)
  })
}
