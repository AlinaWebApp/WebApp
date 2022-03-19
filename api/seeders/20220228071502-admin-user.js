module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Users', [
      // Password for admin: 123456
      {
        username: 'admin@admin.admin',

        password: '$2a$12$ogvcD40cURM8.9o7zah8qeVyW.y9FJagnx6WM.OSoE1JxTBxwpH9q',

        admin: true,

        verified: true,
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete(
      'Users',
      {
        password: '$2a$12$ogvcD40cURM8.9o7zah8qeVyW.y9FJagnx6WM.OSoE1JxTBxwpH9q',
      },
      {},
    );
  },
};
