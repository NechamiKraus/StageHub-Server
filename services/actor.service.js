const bcrypt = require("bcrypt");
const practiceModel = require("../models/practice.model");
const actorModel = require("../models/actor.model");
const mongoose = require('mongoose');
const { Types } = mongoose;

const getAllPractices = async(actorId) =>{
    try{
        return practiceModel.find({ actorsId: { $in: [actorId] } });
    }
    catch(error){
        return { statusCode: 400, message: `fail to get practices: ${error.message}` };
    }
}

const getDetails = async (id) =>{
    try{
        const {name, phone ,email, role, coachId, directorId} = await actorModel.findById( new mongoose.Types.ObjectId(id), 'name phone email role coachId directorId');
        return { statusCode: 200, message: {name, phone ,email, role, coachId, directorId} }
    }
    catch(error){
        return { statusCode: 400, message: `Failed to get actor details: ${error.message}` };
    }
}

module.exports={
    getAllPractices,
    getDetails
}