const providerModel = require("../models/provider.model");
const mongoose = require('mongoose');
const { Types } = mongoose;


const getDetails = async (id) =>{
    try{
        const {name, phone, email, product, price} = await providerModel.findById( new mongoose.Types.ObjectId(id), 'name phone email product price');
        return { statusCode: 200, message: {name, phone, email, product, price} }
    }
    catch(error){
        return { statusCode: 400, message: `Failed to get provider details: ${error.message}` };
    }
}

module.exports={
    getDetails
}