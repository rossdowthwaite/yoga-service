const repository = (db) => {

  const collection = db.collection('positions')

  /*
   * Get all positions
   */

  const getAllPositions = () => {
    return new Promise((resolve, reject) => {
      let positions = []

      const addPosition = (position) => {
        positions.push(position)
      }

      const sendPositions = (err) => {
        if (err) {
          reject(new Error('An error occurred:' + err))
        }
        resolve(positions);
      }

      const coll = collection.find()

      coll.forEach(addPosition, sendPositions)
    })
  }

  /*
   * Get position by name
   */

  const getPositionByName = ({name}) => {
    return new Promise( (resolve, reject) => {
      const query = {
        name,
      }
      collection.find(query).toArray()
        .then( (position) => {
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
