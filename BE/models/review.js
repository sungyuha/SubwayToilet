const mongoose = require('mongoose');
const Schema = mongoose.Schema();

const reviewSchema = new Schema({
  text: { type: String, required: true, unique: true },
  rating : {type: Number},
  password: {},
  name: {},
});

module.exports = mongoose.model('Review', reviewSchema);
