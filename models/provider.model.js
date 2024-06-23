const mongoose = require('mongoose');

const ProviderSchema =  mongoose.Schema({
    name: String,
    publicPassword: String,
    phone: String,
    email: String,
    product: String,
    price: Number,

  })

  module.exports = mongoose.model("Providers",ProviderSchema);