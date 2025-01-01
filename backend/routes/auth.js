const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Sample register route
router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const newUser = new User({ username, password });
  await newUser.save();
  res.status(201).send('User created');
});

// Sample login route
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username, password });
  if (user) {
    res.send('Login successful');
  } else {
    res.status(401).send('Invalid credentials');
  }
});

module.exports = router;
