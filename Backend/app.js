const express = require('express');
const app = express();
const blogRoute = require('./api/routes/blog')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const { urlencoded, json } = require('body-parser')
const authRoute = require('./api/routes/auth')
const categoryRoute = require('./api/routes/category')
const commentRouts = require('./api/routes/comment')


mongoose.connect('mongodb+srv://dnyaneshwar:Danny%405500@bdn.bhaeuzd.mongodb.net/?retryWrites=true&w=majority&appName=bdn')
mongoose.connection.on('connected', () => {
    console.log('connected with database')
})
mongoose.connection.on('error', (err) => {
    console.log('connection failed')
    console.log(err)
})


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/blog', blogRoute);
app.use('/category', categoryRoute)
app.use('/auth', authRoute)
app.use('/comment', commentRouts)


app.use((req, res) => {
    res.status(200).json({
        msg: 'Bad request'
    })
})

module.exports = app;