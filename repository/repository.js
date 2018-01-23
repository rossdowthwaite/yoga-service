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
   * @param name String comes from req.params
   * @return position Object the returned position
   **/
  const getPositionByName = ({name}) => {
    return new Promise( (resolve, reject) => {
      const query = {
        name,
      }
      PositionModel.findOne(query, (err, position) => {
        if (err) {
          reject(new Error('An error occurred:' + err))
        }
        resolve( position );
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
    getPositionByName,
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
