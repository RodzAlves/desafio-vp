const express = require('express');
const UserController = require('../controllers/UserController');
const usersRouter = express.Router();

usersRouter.post('/', UserController.createUser);

usersRouter.get('/', UserController.getAllUsers);

usersRouter.get('/:id', UserController.getUserById);

usersRouter.delete('/:id', UserController.deleteUser);

usersRouter.put('/:id', UserController.updateUser);

module.exports = usersRouter;
