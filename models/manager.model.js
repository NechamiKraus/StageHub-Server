const mongoose = require('mongoose');
const ManagerSchema = mongoose.Schema({
  name: String, 
  phone: String,
  email: String,
  password: String, 

})

module.exports = mongoose.model("Managers",ManagerSchema);