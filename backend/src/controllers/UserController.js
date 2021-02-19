const User = require('../models/User');

module.exports = {
  async createUser(request, response) {
    try {
      const { email } = request.body;

      const findUserExists = await User.findOne({ where: { email } });

      if (findUserExists) {
        return response.status(409).send({ message: 'E-mail já registrado.' });
      }

      await User.create(request.body);

      const { password, ...user } = request.body;

      return response.json(user);
    } catch (err) {
      return response
        .status(400)
        .send({ message: 'Criação de usuário falhou.' });
    }
  },

  async getAllUsers(request, response) {
    try {
      const users = await User.findAll();

      return response.json(users);
    } catch (err) {
      return response
        .status(400)
        .send({ message: 'Buscar todos os usuários falhou.' });
    }
  },

  async getUserById(request, response) {
    try {
      const user = await User.findByPk(request.params.id);

      if (!user) {
        return response.status(400).send({ message: 'Usuário não existe.' });
      }

      const { password, ...userById } = user;

      return response.json(userById);
    } catch (err) {
      return response
        .status(400)
        .send({ message: 'Buscar um usuário falhou.' });
    }
  },

  async deleteUser(request, response) {
    try {
      const userDelete = await User.findByPk(request.params.id);

      if (!userDelete) {
        return response.status(400).send({ message: 'Usuário não existe.' });
      }

      userDelete.destroy(request.body);

      return response.status(200).send({ message: 'Usuário deletado.' });
    } catch (err) {
      return response
        .status(400)
        .send({ message: 'Deletar um usuário falhou.' });
    }
  },

  async updateUser(request, response) {
    try {
      const userUpdate = await User.findByPk(request.params.id);
      const data = request.body;

      if (!userUpdate) {
        return response.status(400).send({ message: 'Usuário não existe.' });
      }

      userUpdate.update(data);

      return response.status(200).send({ message: 'Usuário atualizado.' });
    } catch (err) {
      return response
        .status(400)
        .send({ message: 'Deletar um usuário falhou.' });
    }
  },
};
