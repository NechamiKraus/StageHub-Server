const Router = require('express');
const directorService = require('../services/director.service')
const router = Router();
const loggedIn = require('../middlewares/authentication')

router.post("/signUp/coach/",loggedIn("director"), async (req, res) => {
    const {name,publicPassword,specialization,directorId,phone,email} = req.body;
    const result = await directorService.addCoach(name,publicPassword,specialization,directorId,phone,email);
    const {statusCode, message} = result;
    if (!statusCode)
        res.status(200).send('Coach created succefuly!')
    else
        res.status(statusCode).send(message);
});

router.post("/signUp/provider",loggedIn("director"), async (req, res) => {
    const {name,publicPassword,phone,email,product,price } = req.body;
    const result = await directorService.addProvider(name,publicPassword,phone,email,product,price);
    const {statusCode, message} = result;
    if (!statusCode)
        res.status(200).send('Provider created succefuly!')
    else
        res.status(statusCode).send(message);
});

router.post("/signUp/actor",loggedIn("director"), async (req, res) => {
    const {name,publicPassword,role,coachId,directorId,phone,email } = req.body;
    const result = await directorService.addActor(name,publicPassword,role,coachId,directorId,phone,email);
    const {statusCode, message} = result;
    if (!statusCode)
        res.status(200).send('Actor created succefuly!')
    else
        res.status(statusCode).send(message);
});

module.exports = router;