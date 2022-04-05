module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Users', [
      // Password for admin: admin
      {
        username: 'admin',

        password:
          '$2a$12$uXYqdj.oyKiKdhgL09pycuHBNdVbjA6NTrybl3iLiZr3F0P6W7ht.',

        admin: true,

        verified: true,
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete(
      'Users',
      {
        password:
          '$2a$12$uXYqdj.oyKiKdhgL09pycuHBNdVbjA6NTrybl3iLiZr3F0P6W7ht.',
      },
      {},
    );
  },
};
