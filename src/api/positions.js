const status = require('http-status')
const express = require('express')
const cors = require('cors')

module.exports = (app, options) => {
  const {repo} = options


  var whitelist = process.env.CORS_URL

  const corsOptions = {
    origin: process.env.CORS_URL,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

  app.get('/', (req, res, next) => {
    res.send({title:'hello world'})
  })

  app.get('/api/positions', cors(), (req, res, next) => {
    repo.getAllPositions()
      .then( positions => {
        res.status(status.OK).json(positions)
      })
      .catch(next)
  })

  app.get('/api/positions/start', cors(), (req, res, next) => {
    repo.getStartMoves()
      .then( positions => {
        res.status(status.OK).json(positions)
      })
      .catch(next)
  })

  app.get('/api/positions/start/:level', cors(), (req, res, next) => {
    repo.getStartMovesByLevel(req.params)
      .then( positions => {
        res.status(status.OK).json(positions)
      })
      .catch(next)
  })

  app.get('/api/positions/:slug/', cors(), (req, res, next) => {
    repo.getPositionBySlug(req.params)
      .then( position => {
        res.status(status.OK).json(position)
      })
      .catch(next)
  })

  app.get('/api/positions/:slug/next', cors(), (req, res, next) => {
    repo.getNextMoves(req.params)
      .then( moves => {
        res.status(status.OK).json(moves)
      })
      .catch(next)
  })

  app.get('/api/positions/:slug/next/:level', cors(), (req, res, next) => {
    repo.getNextMovesByLevel(req.params)
      .then( moves => {
        res.status(status.OK).json(moves)
      })
      .catch(next)
  })

  app.get('/api/positions/level/:level', cors(), (req, res, next) => {
    repo.getPositionsByLevel(req.params)
      .then( positions => {
        res.status(status.OK).json(positions)
      })
      .catch(next)
  })
}
