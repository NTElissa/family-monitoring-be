'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('admins', [{
      id: 1,
      name: 'Admin 1',
      email: 'admin1@example.com',
      password: 'admin1password',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 2,
      name: 'Admin 2',
      email: 'admin2@example.com',
      password: 'admin2password',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
    await queryInterface.bulkInsert('parents', [{
      id: 1,
      name: 'Parent 1',
      email: 'parent1@example.com',
      phone: '123-456-7890',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 2,
      name: 'Parent 2',
      email: 'parent2@example.com',
      phone: '555-555-5555',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
    await queryInterface.bulkInsert('teachers', [{
      id: 1,
      name: 'Teacher 1',
      email: 'teacher1@example.com',
      subject: 'Math',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 2,
      name: 'Teacher 2',
      email: 'teacher2@example.com',
      subject: 'English',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
    await queryInterface.bulkInsert('students', [{
      id: 1,
      name: 'Student 1',
      email: 'student1@example.com',
      grade: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 2,
      name: 'Student 2',
      email: 'student2@example.com',
      grade: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('admins', null, {});
    await queryInterface.bulkDelete('parents', null, {});
    await queryInterface.bulkDelete('teachers', null, {});
    await queryInterface.bulkDelete('students', null, {});
  }
};