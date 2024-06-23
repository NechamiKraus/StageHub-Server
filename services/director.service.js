const bcrypt = require("bcrypt");
const coachModel = require('../models/coach.model')
const providerModel = require('../models/provider.model')
const actorModel = require('../models/actor.model')

const addCoach = async(name,publicPassword,specialization,directorId,phone,email) => {
    try {
        const coach = new coachModel({
            name,
            publicPassword,
            specialization, 
            directorId,
            phone,
            email,
        })
       return coach.save();
    } catch (error) {
        return {statusCode:400, message: "Faild to save coach"};
    }
}

const addProvider = async(name,publicPassword,phone,email,product,price) => {
    try {
        const provider = new providerModel({
            name,
            publicPassword,
            phone,
            email,
            product,
            price,
        })
       return provider.save();
    } catch (error) {
        return {statusCode:400, message: "Faild to save provider"};
    }
}

const addActor = async(name,publicPassword,role,coachId,directorId,phone,email) => {
    try {
        const actor = new actorModel({
            name,
            publicPassword,
            role,
            coachId,
            directorId,
            phone,
            email,
        })
       return actor.save();
    } catch (error) {
        return {statusCode:400, message: "Faild to save actor"};
    }
}
module.exports={
    addCoach,
    addProvider,
    addActor,
};