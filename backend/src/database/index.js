// Importando o Sequelize
const Sequelize = require('sequelize');

// Importando a configuração feita em um arquivo separado "config/database.js"
const dbConfig = require('../config/database');

// Importando o Model do Usuário
const User = require('../models/User');

// Conectando o banco de dados com o sequelize.
const connectionDatabase = new Sequelize(dbConfig);

User.init(connectionDatabase);

module.exports = connectionDatabase;
