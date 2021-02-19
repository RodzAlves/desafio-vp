const jwt = require('jsonwebtoken');

const authConfig = require('../config/auth');

class ensureAuthenticated {
  async handle(request, response, next) {
    const { authorization } = request.headers;

    if (!authorization) {
      return response.status(401).send({ message: 'Invalid JWT Token' });
    }

    const token = authorization.replace('Bearer', '').trim();

    try {
      const decoded = jwt.verify(token, authConfig.jwt.secret);

      const { id } = decoded;

      request.user = {
        id: id,
      };

      return next();
    } catch {
      return response.status(401).send({ message: 'Invalid JWT Token' });
    }
  }
}

module.exports = new ensureAuthenticated();
