const express = require('express');
require('dotenv').config()
const bcrypt = require("bcrypt");
const bodyParser = require('body-parser');
const ManagerModel = require('./models/manager.model');
const userController = require('./controllers/user.controller')
const managerController = require('./controllers/manager.controller')
const directorController = require('./controllers/director.controller')
const connectDB = require('./db/dbconnection');
connectDB();

// const authentication = require('./middlewares/authentication')
// const middlewares = [authentication]

// const addManager = async() =>{
//     const salt = await bcrypt.genSalt(10);
//     const hashPassword = await bcrypt.hash("123456", salt);
//     const firstManager = new ManagerModel({
//         name: "Nechami Kraus",
//         phone: "0527614796",
//         email: "nechami6322@gmail.com",
//         password: hashPassword
//     })
//     firstManager.save();
// }
// addManager();
const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(userController);
app.use(managerController);
app.use(directorController);

// app.use(middlewares)

app.listen(port, () => {
    console.log(`listening on http://localhost:${port} `);
});

