const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

exports.signin = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ where: { username } });

    if (!user) {
      console.log('User not found');
      return res.status(404).send({ message: 'User not found' });
    }

    console.log('User found:', user);

    const passwordIsValid = bcrypt.compareSync(password, user.password);

    if (!passwordIsValid) {
      console.log('Invalid Password');
      return res.status(401).send({ accessToken: null, message: 'Invalid Password!' });
    }

    const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET, { expiresIn: 86400 });

    console.log('Authentication successful');
    res.status(200).send({ username: user.username, accessToken: token });
  } catch (error) {
    console.error('Error retrieving user:', error);
    res.status(500).send({ message: 'Error retrieving user' });
  }
};

exports.signup = async (req, res) => {
  const { username, password } = req.body;

  try {
    const hashedPassword = bcrypt.hashSync(password, 8);

    const user = await User.create({ username, password: hashedPassword });

    res.send({ message: 'User registered successfully!' });
  } catch (error) {
    res.status(500).send({ message: 'Error creating user' });
  }
};