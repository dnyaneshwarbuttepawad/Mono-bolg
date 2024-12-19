const express = require('express');
const router = express.Router();
const Blog = require('../model/blog')
const mongoose = require('mongoose')

// category count
router.get('/get/count', (req, res) => {
    Blog.find().countDocuments()
        .then(result => {
            res.status(200).json({
                Blog: result
            })
        }).catch(err => {
            console.log(err)
            res.status(500).json({
                error: err
            })
        })
})

//get data by category
router.get('/category/:category', (req, res) => {
    Blog.find({ category: req.params.category })
        .then(result => {
            res.status(200).json({
                result: result
            })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                error: err
            })
        })
})


// get data by id

router.get('/:id', (req, res) => {
    Blog.find({ _id: req.params.id })
        .then(result => {
            res.status(200).json({
                result: result
            })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                error: err
            })
        })
})



// delete method

router.delete('/:id', (req, res) => {
    Blog.deleteOne({ _id: req.params.id })
        .then(result => {
            res.status(200).json({
                result: result
            })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                error: err
            })
        })
})

// update data
router.put('/:id', (req, res) => {
    Blog.updateOne({ _id: req.params.id }, req.body)
        .then(result => {
            res.status(200).json({
                result: result
            })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                error: err
            })
        })
})



// get the all data
router.get('/', (req, res, next) => {
    Blog.find()
        .select('_id title discription imgurl')
        .then(result => {
            res.status(200).json({
                result: result
            })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({

                error: err
            })
        })
});

// post method
router.post('/', (req, res) => {
    const newBlog = new Blog({
        _id: new mongoose.Types.ObjectId,
        title: req.body.title,
        category: req.body.category,
        discription: req.body.discription,
        imgurl: req.body.imgurl
    })
    newBlog.save()
        .then(result => {
            res.status(200).json({
                new_bloge: result
            })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                error: err
            })
        })
});

module.exports = router;