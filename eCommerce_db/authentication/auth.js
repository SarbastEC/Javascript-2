const jwt = require('jsonwebtoken');
require('dotenv').config();

const secretkey = process.env.SECRET_KEY;

exports.generateToken = (user) => {
    return jwt.sign({id: user._id}, secretkey, {expiresIn: '1h'})
};

exports.verifyToken = (req, res, next) => {
    try{
        const token = req.headers.authorization.split(' ')[1];
        const userData = jwt.verify(token, secretkey)
        next()
    }
    catch{
        return res.status(401).json({
            statusCode: 401,
            status: false,
            message: 'Access Restricted! Please Login'
        })
    }
}