'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categories', [
      {
        category_name: 'Electronics',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_name: 'Clothing',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Add more categories as needed
    ], {});
  },

  async down(queryInterface, Sequelize) {
    // Remove all entries from the categories table
    await queryInterface.bulkDelete('categories', null, {});
  },
};
