const bcrypt = require("bcrypt");
const candidateModel = require('../models/candidate.model');
const directorModel = require("../models/director.model");

const addDirector = async(email) => {
    try {
        const candidate = await candidateModel.findOne({email : email});
        if (!candidate) {
            return { statusCode: 404, message: "Candidate not found" };
        }
        const director = new directorModel({
            name: candidate.name,
            phone: candidate.phone,
            email: candidate.email,
            password: candidate.password,
            publicPassword: candidate.publicPassword,
        })
        await candidateModel.findOneAndDelete({email:email});
       return director.save();
    } catch (error) {
        return {statusCode:400, message: "Faild to save director"};
    }
}

module.exports={
    addDirector
};