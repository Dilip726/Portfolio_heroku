const router = require('express').Router();
const user = require('../modle/user');
const jwt = require('jsonwebtoken')

router.post('/message', async(req, res) => {
    const { username, email, contact, desc } = req.body;

    try {
        const MessUser = await user.create({
            username,
            email,
            contact,
            desc
        })
        MessUser.save();
        console.log('MSG', MessUser);

        res.status(200).json(MessUser);
    } catch (error) {
        res.status(400).json("Not working")
    }
})

module.exports = router;