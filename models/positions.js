const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const positionsSchema = new Schema({
  name: String,
  level: String,
  next_moves: Array,
})

const PositionModel = mongoose.model('positions', positionsSchema)

module.exports = PositionModel
