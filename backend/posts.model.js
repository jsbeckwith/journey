const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Posts = new Schema({
    author: {
        type: String
    },
    date: {
        type: Date
    },
    content: {
        type: String
    }
});

module.exports = mongoose.model('Posts', Posts);