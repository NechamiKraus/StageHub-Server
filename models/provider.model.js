const mongoose = require('mongoose');

const ProviderSchema =  new Schema({
    name: String,
    phone: String,
    email: String,
    product: String,
    price: Number,

  })

  module.exports = mongoose.model("Providers",ProviderSchema);