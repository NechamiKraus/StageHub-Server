const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {  
        const connectionString = process.env.CONNECTION_STRING  
        const connect = await mongoose.connect(connectionString);
        console.log(`MongoDB Connected: ${connect.connection.host}`);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1); // Exit process with an error code
    }
};

module.exports = connectDB;
