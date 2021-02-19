const User = require('../models/User');
const { compare } = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

class AuthenticateService {
  async execute(request, response) {
    const { email, password } = request.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return response
        .status(400)
        .send({ message: 'Incorrect email/password combination.' });
    }

    const isValidPassword = await compare(password, user.password);

    if (!isValidPassword) {
      return response
        .status(400)
        .send({ message: 'Incorrect email/password combination.' });
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = jwt.sign({ id: user.id }, secret, {
      expiresIn,
    });

    return {
      user,
      token,
    };
  }
}

module.exports = AuthenticateService;
