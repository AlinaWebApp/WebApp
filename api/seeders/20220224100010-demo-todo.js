// eslint-disable-next-line @typescript-eslint/no-var-requires
const faker = require('faker');

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Todos', [
      {
        todo: faker.animal.dog(),
        userId: 1,
      },
      {
        todo: faker.animal.cat(),
        userId: 1,
      },
      {
        todo: faker.animal.snake(),
        userId: 2,
      },
      {
        todo: faker.animal.bird(),
        userId: 2,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete(
      'Todos',
      {
        userId: {
          [Sequelize.Op.or]: [1, 2],
        },
      },
      {},
    );
  },
};
