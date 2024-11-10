
const mongoose = require('mongoose');

const OrderSchema =  new mongoose.Schema({
    name:String,
    phone:String,
    email:String,
    amount:Number,
    showId:String,
    qrCode:String,
    pdf:String
})

module.exports = mongoose.model("orders",OrderSchema);