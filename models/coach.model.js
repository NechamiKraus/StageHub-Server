const mongoose = require('mongoose');

const CoachSchema =  new Schema({
    name: String,
    specialization: {
    type: String,
      specializations: ["dancing", "acting", "singing", "playing"] 
  },    
    directorId: String,
    phone: String,
    email: String,

  })

  module.exports = mongoose.model("Coaches",CoachSchema);