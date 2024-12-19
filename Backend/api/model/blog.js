const mongoose = require('mongoose')

blogSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    category: String,
    discription: String,
    imgurl: String
})
module.exports = mongoose.model('Blog', blogSchema)