const bcrypt = require("bcrypt");
const actorModel = require("../models/actor.model");
const managerModel = require("../models/manager.model");
const candidateModel = require("../models/candidate.model")
const jwt = require("jsonwebtoken");
const directorModel = require("../models/director.model");
require('dotenv').config()

// const connectActor = async(email,password,callback)=>{
//     try{
//          const actor = await actorModel.findOne({email: email})
//          const validPassword = await bcrypt.compare(password,actor.password);
//          if(validPassword)
//          {
//              callback(null,{statusCode:200,data:String(actor._id)})
//          }
//          else{
//              callback({statusCode:404,message:"actor not found"});
//          }}
//     catch(error)
//     {
        
//     }
//  }

// ass candidate
const addCandidate = async (name, phone, email, password, publicPassword) =>{
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const Candidate = new candidateModel({
        name,
        phone,
        email,
        password: hashPassword,
        publicPassword,
    })
   return Candidate.save();
};

// login manager
const connectManager = async (email, password) => {
    try {
        const manager = await managerModel.findOne({ email: email });

        if (!manager) {
            return { statusCode: 404, message: "Manager not found" };
        }
        const validPassword = await bcrypt.compare(password, manager.password);

        if (validPassword) {
            const token = jwt.sign({ name: manager.name, phone: manager.phone, email, password: manager.password ,role: "manager"}, process.env.TOKEN_SECRET);
            return { statusCode: 200, id: String(manager._id), token };
        } else {
            return { statusCode: 401, message: "Invalid password" };
        }
    } catch (error) {
        return { statusCode: 400, message: `Something went wrong while trying to connect the manager: ${error.message}` };
    }
};

// login director
const connectDirector = async (email, password) => {
    try {
        const director = await directorModel.findOne({ email: email });

        if (!director) {
            return { statusCode: 404, message: "Manager not found" };
        }
        const validPassword = await bcrypt.compare(password, director.password);

        if (validPassword) {
            const token = jwt.sign({ name: director.name, phone: director.phone, email, password: director.password ,role: "director"}, process.env.TOKEN_SECRET);
            return { statusCode: 200, id: String(director._id), token };
        } else {
            return { statusCode: 401, message: "Invalid password" };
        }
    } catch (error) {
        return { statusCode: 400, message: `Something went wrong while trying to connect the director: ${error.message}` };
    }
};

module.exports={
    connectManager,
    addCandidate,
    connectDirector,
};