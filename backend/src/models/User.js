const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');

// Criação do Model do Usuário
class User extends Model {
  static init(sequelize) {
    super.init(
      {
        // Quais valores o usuário terá
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        phone: DataTypes.STRING,
        cpf: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
    // Criptografando a senha que será enviada para o banco de dados com bcrypt.
    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password = await bcrypt.hash(user.password, 8);
      }
    });
    return this;
  }
}

module.exports = User;
