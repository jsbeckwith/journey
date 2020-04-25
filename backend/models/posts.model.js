const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Posts = new Schema({
    author: {
        type: String,  // _id reference to user, not username or display name
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    content: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Posts', Posts);