// eslint-disable-next-line @typescript-eslint/no-var-requires
const faker = require('faker');

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Users', [
      // Password for all: 12345
      {
        name: 'Alex',

        username: faker.internet.email(),

        password:
          '$2a$12$H.1NpjCF5MCoTHyQd8TVVud8vwf4WpSCsxvVw7jcxWVEWGtto5Z1G',

        verified: true,
      },
      {
        name: 'George',

        username: faker.internet.email(),

        password:
          '$2a$12$H.1NpjCF5MCoTHyQd8TVVud8vwf4WpSCsxvVw7jcxWVEWGtto5Z1G',

        verified: true,
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete(
      'Users',
      {
        password:
          '$2a$12$H.1NpjCF5MCoTHyQd8TVVud8vwf4WpSCsxvVw7jcxWVEWGtto5Z1G',
      },
      {},
    );
  },
};
