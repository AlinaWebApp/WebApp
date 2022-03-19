module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('Todos', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      todo: Sequelize.DataTypes.STRING,
      userId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'Users',
          },
          key: 'id',
        },
        onDelete: 'CASCADE',
        allowNull: false,
      },
    });
  },

  async down(queryInterface) {
    return queryInterface.dropTable('Todos');
  },
};
