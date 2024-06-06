const mongoose = require('mongoose');

const ActorSchema =  new Schema({
    name: String,
    role: String,
    coachId: String,
    directorId: String,
    phone: String,
    email: String,

  })

  module.exports = mongoose.model("Actors",ActorSchema);
