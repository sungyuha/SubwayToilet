const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const auth = new Schema({
  email: { type: String },
  nickname: { type: String },
  snsId: { type: String },
  provider: { type: String },
});

module.exports = mongoose.model('auth', auth);
