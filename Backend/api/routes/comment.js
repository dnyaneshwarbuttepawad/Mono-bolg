const express = require('express');
const router = express.Router();
const Comment = require('../model/comment')
const mongoose = require('mongoose')

//count all comment perticular blogid

router.get('/get/count/:blogId', (req, res) => {
    Comment.find({ blogId: req.params.blogId }).countDocuments()
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

//get all comments
// router.get('/', (req, res) => {
//     Category.find({'_id email commentText'})
//         .then(result => {
//             res.status(200).json({
//                 Category: result
//             })
//         })
//         .catch(err => {
//             console.log(err)
//             res.status(500).json({
//                 error: err
//             })
//         })
// })


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
    Comment.deleteOne({ _id: req.params.id })
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

// // update data
// router.put('/:id', (req, res) => {
//     Category.updateOne({ _id: req.params.id }, req.body)
//         .then(result => {
//             res.status(200).json({
//                 Category: result
//             })
//         })
//         .catch(err => {
//             console.log(err)
//             res.status(500).json({
//                 error: err
//             })
//         })
// })



//get the all   comment
router.get('/', (req, res, next) => {
    Comment.find()
        .select('_id  commentText email ')
        .then(result => {
            res.status(200).json({
                comments: result
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
    const newComment = new Comment({
        _id: new mongoose.Types.ObjectId,
        // name: req.body.name,
        commentText: req.body.commentText,
        blogId: req.body.blogId
    })
    newComment.save()
        .then(result => {
            res.status(200).json({
                new_Comment: result
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