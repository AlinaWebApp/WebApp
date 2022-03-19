// eslint-disable-next-line @typescript-eslint/no-var-requires
const faker = require('faker');

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Users', [
      // Password for all: 123456
      {
        username: faker.internet.email(),

        password: '$2a$12$ogvcD40cURM8.9o7zah8qeVyW.y9FJagnx6WM.OSoE1JxTBxwpH9q',

        verified: true,
      },
      {
        username: faker.internet.email(),

        password: '$2a$12$ogvcD40cURM8.9o7zah8qeVyW.y9FJagnx6WM.OSoE1JxTBxwpH9q',

        verified: false,
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete(
      'Users',
      {
        password: '$2a$12$H.1NpjCF5MCoTHyQd8TVVud8vwf4WpSCsxvVw7jcxWVEWGtto5Z1G',
      },
      {},
    );
  },
};
