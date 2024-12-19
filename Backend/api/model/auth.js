const mongoose = require('mongoose')

authSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: String,
    email: String,
    password: String
})



module.exports = mongoose.model('Auth', authSchema)