const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const User = require('../model/auth')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
    // user signup
router.post('/user/signup', (req, res) => {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
            if (err) {
                console.log(err)
                return res.status(500).json({
                    error: err
                });
            } else {
                const user = new User({
                    _id: new mongoose.Types.ObjectId,
                    fullName: req.body.fullName,
                    email: req.body.email,
                    password: hash
                })
                user.save()
                    .then(result => {
                        res.status(200).json({
                                newUser: result
                            })
                            .catch(err => {
                                console.log(err);
                                res.status(500).json({
                                    error: err
                                })
                            })
                    })
            }
        })
    })
    // logi for user
router.post('/user/login', async(req, res) => {
    try {
        const user = await User.find({ email: req.body.email });
        if (user.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }

        const isValidPassword = await bcrypt.compare(
            req.body.password,
            user[1].password // Accessing the password from the first user object
        );
        if (!isValidPassword) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({
            email: user[1].email,
            fullName: user[1].fullName,
        }, 'iam ', { expiresIn: '365' });

        res.status(200).json({
            email: user[1].email,
            fullName: user[1].fullName,
            token,
        });
    } catch (err) {
        console.error('Error during login:', err);
        res.status(500).json({ message: 'An error occurred during login' });
    }
});

// admin login
router.post('/admin/login', (req, res) => {
    if (req.body.userName == 'danyanya@123' && req.body.password == 'dnaynesh123') {

        const token = jwt.sign({
            email: 'dnyaneshwar@gmail.com',

        }, 'iam dnyanya1 ', { expiresIn: '365' });

        return res.status(200).json({

            email: 'dnyaneshwar@gmail.com',
            token: token
        });
    }
    res.status(404).json({
        msg: 'bad request'
    })

});
module.exports = router;