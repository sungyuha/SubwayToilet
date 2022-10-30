const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  stinNm: { type: String },
  text: { type: String },
  rating: { type: Number },
  date: { type: String },
});

module.exports = mongoose.model('Review', reviewSchema);
