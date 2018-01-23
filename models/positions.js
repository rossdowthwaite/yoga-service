const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const positionsSchema = new Schema({
  name: String,
  slug: String,
  level: String,
  next_moves: Array,
  tags: Array,
  level: String,
  image_url: String,
  start: Boolean,
  description: String,
})

const PositionModel = mongoose.model('positions', positionsSchema)

module.exports = PositionModel
