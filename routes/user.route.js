const express = require('express');
const router = express.Router();

const userService = require('../services/user.services')
const tokenService = require('../services/token.services')


router.get('/welcome', (req, res) => {
    res.send('Hi Welcome!');
});

router.post('/register', async (req, res) => {
    const user = await userService.register(req.body)
    const token = await tokenService.generateAuthTokens(user)
    res.send({user, token})
});

router.post('/login', async (req, res) => {
    console.log(req.body)
    const user = await userService.login(req.body.email, req.body.password)
    const token = await tokenService.generateAuthTokens(user)
    res.send({user, token})
});

module.exports = router;