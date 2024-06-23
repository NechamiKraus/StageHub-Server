const mongoose = require('mongoose');

const CandidateSchema =  mongoose.Schema({
    name: String,
    phone: String,
    email: String,    
    password: String,
    publicPassword: String,

  })

  module.exports = mongoose.model("Candidates",CandidateSchema);