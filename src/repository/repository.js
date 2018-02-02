const PositionModel = require('../models/positions')

const repository = (db) => {

  /**
   * Get all positions
   *
   * @return positions Array of the returned positions
   **/
  const getAllPositions = () => {
    return new Promise((resolve, reject) => {
      PositionModel.find().then( positions => {
        resolve(positions);
      }).catch( (err) => {
        reject(new Error('An error occurred:' + err))
      });
    })
  }

  /**
   * Get position by name
   *
   * @param slug String comes from req.params
   * @return position Object the returned position
   **/
  const getPositionBySlug = ({slug}) => {
    return new Promise( (resolve, reject) => {
      const query = {
        slug,
      }
      PositionModel.findOne(query, (err, position) => {
        if (err) {
          reject(new Error('An error occurred:' + err))
        }
        !position
          ? resolve( {} )
          : resolve( position );
      })
    })
  }

  /**
   * Get next positions
   *
   * @param slug String comes from req.params
   * @return position Object the returned position
   **/
  const getNextMoves = ({slug}) => {
    return new Promise( (resolve, reject) => {
      const query = {
        slug,
      }
      PositionModel.findOne(query, 'next_moves', (err, moves) => {
        if (err) {
          reject(new Error('An error occurred:' + err))
        }
        !moves
          ? resolve( [] )
          : resolve( moves );
      })
    })
  }

  /**
   * Get next positions by level
   *
   * @param slug String comes from req.params
   * @return position Object the returned position
   **/
  const getNextMovesByLevel = ({slug, level}) => {
    return new Promise( (resolve, reject) => {
      const query = {
        slug,
        next_moves: { $elemMatch: { level }}
      }

      PositionModel.findOne(query,
         (err, position) => {
          if (err) {
            reject(new Error('An error occurred:' + err))
          }
          let next_moves = []
          if( position !== null ) {
            next_moves = position.next_moves.filter( (move) => {
              return move.level === level;
            })
          }
          resolve( next_moves )
      })
    })
  }

  /**
   * Get positions by level
   *
   * @param level String comes from req.params
   * @return position Object the returned position
   **/
  const getPositionsByLevel = ({level}) => {
    return new Promise( (resolve, reject) => {
      const query = {
        level,
      }
      PositionModel.find(query, (err, positions) => {
        if (err) {
          reject(new Error('An error occurred:' + err))
        }
        !positions
          ? resolve( [] )
          : resolve( positions );
      })
    })
  }

  /**
   * Get start positions
   *
   * @param level String comes from req.params
   * @return position Object the returned position
   **/
  const getStartMoves = () => {
    return new Promise( (resolve, reject) => {
      const query = {
        start: true
      }
      PositionModel.find(query, (err, positions) => {
        if (err) {
          reject(new Error('An error occurred:' + err))
        }
        !positions
          ? resolve( [] )
          : resolve( positions );
      })
    })
  }

  /**
   * Get start positions by level
   *
   * @param level String comes from req.params
   * @return position Object the returned position
   **/
  const getStartMovesByLevel = ({level}) => {
    return new Promise( (resolve, reject) => {
      const query = {
        level,
        start: true,
      }
      PositionModel.findOne(query, (err, positions) => {
        if (err) {
          reject(new Error('An error occurred:' + err))
        }
        !positions
          ? resolve( [] )
          : resolve( positions );
      })
    })
  }


  /*
   *  Discconnect from database
   */
  const disconnect = () => {
    db.close()
  }

  return {
    getAllPositions,
    getPositionBySlug,
    getNextMoves,
    getNextMovesByLevel,
    getPositionsByLevel,
    getStartMovesByLevel,
    getStartMoves,
    disconnect,
  }
}

const connect = (connection) => {
  return new Promise((resolve, reject) =>{
    if(!connection) {
      reject(new Error('connection db not supplied'))
    }
    resolve( repository(connection) )
  })
}

module.exports = Object.assign({}, {connect})
