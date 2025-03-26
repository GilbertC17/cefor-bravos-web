const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/user.model');

exports.signin = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ where: { username } });
    if (!user) {
      console.log('User not found');
      return res.status(404).send({ message: 'User not found' });
    }

    const passwordIsValid = bcrypt.compareSync(password, user.password);
    if (!passwordIsValid) {
      console.log('Invalid password');
      return res.status(401).send({ accessToken: null, message: 'Invalid password' });
    }

    const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET, {
      expiresIn: 86400 // 24 hours
    });

    console.log('Token generated:', token);
    res.status(200).send({ accessToken: token });
  } catch (error) {
    console.error('Error during sign-in:', error.message);
    res.status(500).send({ message: error.message });
  }
};