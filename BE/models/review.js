const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  stinCd: { type: String },
  id : {type:String},
  date: { type: String },
  cleanliness : {type:String},
  count : {type:String},
  size : {type:String},
  convenience : {type:String},
  rating: { type: Number },
  text: { type: String },
});

module.exports = mongoose.model('Review', reviewSchema);
