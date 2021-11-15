const router = require('express').Router();
const user = require('../modle/user');
const jwt = require('jsonwebtoken');

router.post('/message', async (req, res) => {
  const { username, email, contact, desc } = req.body;

  try {
    const MessUser = await user.create({
      username,
      email,
      contact,
      desc,
    });
    MessUser.save();
    console.log('MSG', MessUser);

    res.status(200).json(MessUser);
  } catch (error) {
    res.status(400).json('Not working');
  }
});

var data = {
  username: 'dilip',
  password: 'mypassword',
};

router.get('/messages/list', async (req, res) => {
  var username = req.body.username;
  var password = req.body.password;

  //   if (username === data.username && password === data.password) {
  const allMessage = await user.find();
  res.status(200).json({ data: allMessage });
  //   }
  //   return res.status(404).json({ message: 'Page not found' });
});

module.exports = router;
