const mongodb = require('mongoose');
const productSchama = mongodb.Schema({
    name: {type: String, required: true, unique: true},
    short: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    image: {type: String, required: true},
    created: {type: Date, default: Date.now},
    modified: {type: Date, default: Date.now}
});


module.exports = mongodb.model('product', productSchama);