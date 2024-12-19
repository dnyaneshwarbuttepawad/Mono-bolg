const express = require('express');
const router = express.Router();
const Category = require('../model/category')
const mongoose = require('mongoose')
    //count category
router.get('/get/count', (req, res) => {
    Category.find().countDocuments()
        .then(result => {
            res.status(200).json({
                result: result
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
    Category.find({ category: req.params.category })
        .then(result => {
            res.status(200).json({
                Category: result
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

// router.get('/:id', (req, res) => {
//     Blog.find({ _id: req.params.id })
//         .then(result => {
//             res.status(200).json({
//                 result: result
//             })
//         })
//         .catch(err => {
//             console.log(err)
//             res.status(500).json({
//                 error: err
//             })
//         })
// })



// delete method

router.delete('/:id', (req, res) => {
    Category.deleteOne({ _id: req.params.id })
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
    Category.updateOne({ _id: req.params.id }, req.body)
        .then(result => {
            res.status(200).json({
                Category: result
            })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                error: err
            })
        })
})



// get the all   category
router.get('/', (req, res, next) => {
    Category.find()
        .select('_id name imgurl')
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
    const newCategory = new Category({
        _id: new mongoose.Types.ObjectId,
        name: req.body.name,
        imgurl: req.body.imgurl
    })
    newCategory.save()
        .then(result => {
            res.status(200).json({
                new_Category: result
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