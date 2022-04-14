module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('Users', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: Sequelize.DataTypes.STRING,
      username: Sequelize.DataTypes.STRING,
      password: Sequelize.DataTypes.STRING,
      verified: Sequelize.DataTypes.BOOLEAN,
    });
  },

  async down(queryInterface) {
    return queryInterface.dropTable('Users');
  },
};
