const express = require('express');
const router = express.Router();
const sequelize = require('../db');
const UserModel = sequelize.import('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//create user account
router.post('/createuser', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    UserModel.create({
        username: username,
        password: bcrypt.hashSync(password, 13)
    }).then(
        (userData)=> {
            let token = jwt.sign({id: username.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24});
            res.json({
                username: username,
                message: 'created',
                sessionToken: token
            })
        },
        createdError = (err) => {
            res.send(500, err.message)
        }
    );
})

router.post('/login', (req, res) => {
    UserModel.findOne( { where: { username: req.body.username}})
    .then(
        (userData) => {
            if (userData) {
                bcrypt.compare(req.body.password, userData.password, (err, match)=> {
                    if(match){
                        let token = jwt.sign({id: userData.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24});
                        res.json({
                            userData: userData,
                            message: 'created',
                            sessionToken: token
                        })
                    } else {
                        res.status(500).send( "password does not match")
                    }
                  
                })
            } else {
                res.status(500).send("User does not exist")
            }
        },
        (err) => {
            res.status(500).send("failed sign in")
        }
    );
})

module.exports = router;