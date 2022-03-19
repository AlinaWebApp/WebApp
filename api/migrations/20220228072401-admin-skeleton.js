module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.addColumn('Users', 'admin', {
      type: Sequelize.DataTypes.BOOLEAN,
      defaultValue: false,
    });
  },

  async down(queryInterface) {
    return queryInterface.removeColumn('Users', 'admin');
  },
};
