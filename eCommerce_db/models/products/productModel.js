const mongodb = require('mongoose');
const Product = require('./productSchema');

exports.getProducts = (req, res) => {
    Product.find()
    .then(data => res.status(200).json(data))
    .catch(error => res.status(500).json(error))
}

exports.getOneProduct = (req, res) => {
    Product.exists({_id: req.params.id}, (error, result) => {
        if(error){
            return res.status(400).json(error)
        }else {
            if(result){
                Product.findById(req.params.id)
                .then(data => res.status(200).json(data))
                .catch(error => res.status(500).json(error)) 
            }else {
                return res.status(404).json({
                    statusCode: 404,
                    status: false,
                    message: 'This product does not exist'
                })
            }
        }
    })
}

exports.createProduct = (req, res) => {
    Product.exists({name: req.body.name}, (error, result) => {
        if(error){
            return res.status(500).json(error)
        }else {
            if(result){
                return res.status(400).json({
                    statusCode: 400,
                    status: false,
                    message: 'A product by that name already exists'
                })
            }else {
                const newProduct = new Product({
                    name: req.body.name,
                    short: req.body.short,
                    description: req.body.description,
                    price: req.body.price,
                    image: req.body.image
                })
                newProduct.save()
                .then(() => {
                    res.status(201).json({
                        statusCode: 201,
                        status: true,
                        message: 'A new product created successfully'
                    })
                })
                .catch(() => {
                    res.status(500).json({
                        statusCode: 500,
                        status: false,
                        message: 'Failed to create a new product'
                    })
                })
            }
        }
    })
}

exports.upduteProduct = (req, res) => {
    Product.exists({_id: req.params.id}, (error, result) => {
        if(error){
            return res.status(400).json(error)
        } else{
            if(result){
                Product.updateOne({_id: req.params.id}, {
                    ...req.body,
                    modified: Date.now()
                })
                .then(() => res.status(200).json({
                    statusCode: 200,
                    status: true,
                    message: 'The product updeted successfully' 
                }))
                .catch(() => res.status(500).json({
                    statusCode: 500,
                    status: false,
                    message: 'Failed to update the product'
                }))
            } else {
                return res.status(404).json({
                    statusCode: 404,
                    status: false,
                    message: 'This product does not exist'
                })
            }
        }
    })
}

exports.deleteProduct = (req, res) => {
    Product.exists({_id: req.params.id}, (error, result) => {
        if(error){
            return res.status(400).json(error)
        } else {
            if(result){
                Product.deleteOne({_id: req.params.id})
                .then(() => res.status(200).json({
                    statusCode: 200,
                    status: true,
                    message: 'The product deleted successfully'
                }))
                .catch(() => res.status(500).json({
                    statusCode: 500,
                    status: false,
                    message: 'Failed to delete the product'
                }))
            } else {
                return res.status(404).json({
                    statusCode: 404,
                    status: false,
                    message: 'This product does not exist'
                })
            }
        }
    })
}