const mongoose = require('mongoose')

categorySchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    imgurl: String
})



module.exports = mongoose.model('Category', categorySchema)