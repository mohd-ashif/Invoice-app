const mongoose = require('mongoose');

const ItemModel = new mongoose.Schema({
    itemId: { type: Number, unique: true }, 
    itemName: { type: String, unique: true }, 
    price: { type: Number },
    tax: { type: Number },
    subTotal: { type: Number },
    date: {type: Date, required: true},
});

module.exports = mongoose.model('items', ItemModel);
