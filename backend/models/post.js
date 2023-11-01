const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    category: String,
    title: String,
    description: String,
    content: String,
    image: String
});

module.exports = mongoose.model('BlogPost', postSchema);