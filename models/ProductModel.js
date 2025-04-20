const { Schema, model } = require('../connection');

const mySchema = new Schema({
    name : String,
    category : {type: String},
    price : { type: Number, required: true},
    Image : { type: String, unique: true},
    createdAt : { type: Date, default: Date.now}
});

module.exports = model(mySchema, 'products');