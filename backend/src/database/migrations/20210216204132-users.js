'use strict';
// Migration de criação de usuário.

module.exports = {
  // Cria a migration.
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        // Definindo as propriedades do id do usuário.
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true,
      },
      first_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      last_name: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        // Precisa ser único, para não ter e-mails repitidos no banco de dados.
        unique: true,
        validate: {
          // Validando se realmente é um e-mail. Por exemplo: teste@salestime.com
          isEmail: true,
        },
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      // Telefone do usuário, assim como pede no cadastro da Salestime.
      phone: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      cpf: {
        type: Sequelize.STRING,
      },

      /**
       * Data de criação e update dos usuários no Banco, elas já foram definidas
       * no arquivo de configurações do banco, aqui estamos apenas definindo elas.
       */

      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },
  // Desfaz a ultima alteração feita na migration, caso seja necessário.
  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  },
};
