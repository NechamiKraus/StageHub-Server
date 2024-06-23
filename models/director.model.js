const mongoose = require('mongoose');

const DirectorSchema =  mongoose.Schema({
    name: String, 
    password: String, 
    phone: String,
    email: String,
    publicPassword: String,

  })

  module.exports = mongoose.model("Directors",DirectorSchema);