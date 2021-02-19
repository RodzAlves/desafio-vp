const express = require('express');
const AuthenticateService = require('../services/AuthenticateService');
const sessionsRouter = express.Router();

sessionsRouter.post('/', async (request, response) => {
  const authenticateUser = new AuthenticateService();

  const { user, token } = await authenticateUser.execute(request, response);

  delete user.dataValues.password;

  return response.json({ user, token });
});

module.exports = sessionsRouter;
