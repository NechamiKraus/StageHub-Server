const mongoose = require('mongoose');

const ActorSchema =  mongoose.Schema({
    name: String,
    publicPassword: String,
    role: String,
    coachId: String,
    directorId: String,
    phone: String,
    email: String,

  })

  module.exports = mongoose.model("Actors",ActorSchema);
