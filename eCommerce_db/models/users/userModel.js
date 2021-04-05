const mongodb = require('mongoose');
const User = require('./userSchema');
const bcrypt = require('bcrypt');
const auth = require('../../authentication/auth');

exports.registerUser = (req, res) => {
    User.exists({email: req.body.email}, (error, result) => {
        if(error){
            return res.status(400).json(error)
        } else {
            if (result){
                return res.status(400).json({
                    statusCode: 400,
                    status: false,
                    message: 'This email is already taken'
                })
            } else {
                const salt = bcrypt.genSaltSync(10);
                bcrypt.hash(req.body.password, salt, (error, hash) => {
                    if(error){
                        return res.status(500).json({
                            statusCode: 500,
                            status: false,
                            message: 'Failed when encrypting user password' 
                        })
                    } else {
                        const newUser = new User({
                            firstName: req.body.firstName,
                            lastName: req.body.lastName,
                            email: req.body.email,
                            passwordHash: hash
                        })
                        newUser.save()
                        .then(() => {
                            res.status(201).json({
                                statusCode: 201,
                                status: true,
                                message: 'A new user created successfully'
                            })
                        })
                        .catch(() => {
                            res.stauts(500).json({
                                statusCode: 500,
                                status: false,
                                message: 'Failed to create a new user'
                            })
                        })
                    }
                })
            }
        }
    })
}

exports.loginUser = (req, res) => {
    User.findOne({email: req.body.email})
    .then((user) => {
        if(user === null){
            return res.status(404).json({
                statusCode: 404,
                status: false,
                message: 'Incorrect email or password'
            })
        } else {
            bcrypt.compare(req.body.password, user.passwordHash, (error, result) => {
                if(error){
                    return res.status(400).json(error)
                } else {
                    if (result){
                        res.status(200).json({
                            statusCode: 200,
                            status: true,
                            message: 'The authentication was successful',
                            token: auth.generateToken(user)
                        })
                    } else {
                        res.status(401).json({
                            statusCode:401,
                            status: false,
                            message: 'Incorrect email or password'
                        })
                    }
                }
            })
        }
    })
    .catch(() => {
        return res.status(500).json({
            statusCode: 500,
            status: false,
            message: 'Failed to get User'
          })
    })
}