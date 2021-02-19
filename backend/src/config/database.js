module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  // Definindo nome do banco de dados.
  database: 'vintepila',
  define: {
    timestamps: true,
    underscored: true,
  },
};
