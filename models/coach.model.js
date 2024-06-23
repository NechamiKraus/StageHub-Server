const mongoose = require('mongoose');

const CoachSchema =  mongoose.Schema({
    name: String,
    publicPassword: String,
    specialization: {
    type: String,
      specializations: ["dancing", "acting", "singing", "playing"] 
  },    
    directorId: String,
    phone: String,
    email: String,

  })

  module.exports = mongoose.model("Coaches",CoachSchema);