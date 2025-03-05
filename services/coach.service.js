const bcrypt = require("bcrypt");
const practiceModel = require("../models/practice.model");
const actorModel = require("../models/actor.model");
const coachModel = require("../models/coach.model");
const mongoose = require('mongoose');
const { Types } = mongoose;

const getAllPractices = async(coachId) =>{
    try{
        return practiceModel.find({coachId:coachId});
    }
    catch(error){
        return { statusCode: 400, message: `fail to get practices: ${error.message}` };
    }
}

const getAllActors = async(coachId) =>{
    try{
        return actorModel.find({coachId:coachId});
    }
    catch(error){
        return { statusCode: 400, message: `fail to get actors: ${error.message}` };
    }
}

const getDetails = async (id) =>{
    try{
        const {name, phone, email, specialization, directorId} = await coachModel.findById( new mongoose.Types.ObjectId(id), 'name phone email specialization directorId');
        return { statusCode: 200, message: {name, phone, email, specialization, directorId} }
    }
    catch(error){
        return { statusCode: 400, message: `Failed to get coach details: ${error.message}` };
    }
}

module.exports={
    getAllPractices,
    getAllActors,
    getDetails
}