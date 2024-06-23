const Router = require('express');
const managerService = require('../services/manager.service')
const loggedIn = require('../middlewares/authentication')
const router = Router();

// add director
router.post("/signUp/director/",loggedIn("manager"), async (req, res) => {
    const {email} = req.body;
    const result = await managerService.addDirector(email);
    const {statusCode, message} = result;
    if (!statusCode)
        res.status(200).send('Director created succefuly!')
    else
        res.status(statusCode).send(message);
});


module.exports = router;