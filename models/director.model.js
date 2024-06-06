const mongoose = require('mongoose');

const DirectorSchema =  new Schema({
    name: String,  
    phone: String,
    email: String,

  })

  module.exports = mongoose.model("Directors",DirectorSchema);