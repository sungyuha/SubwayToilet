const mongoose = require('mongoose');

const suggestSchema = mongoose.Schema({
    writer: {type: String, required: true},
    title: {type: String, required: true},
    content: { type: String, required: true},
    date : {type: Date, default:Date.now},
});

module.exports = mongoose.model('Suggest', suggestSchema);
