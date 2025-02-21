import { QueryInterface } from 'sequelize';
import { Op } from 'sequelize';

const seedData = {
  up: async (queryInterface: QueryInterface): Promise<void> => {
    await queryInterface.bulkInsert('data_points', [
      {
        x: new Date('2023-01-01T00:00:00Z'),
        y: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        x: new Date('2023-01-02T00:00:00Z'),
        y: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        x: new Date('2023-01-03T00:00:00Z'),
        y: 30,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Add more data points as needed
      {
        x: new Date('2023-01-04T00:00:00Z'),
        y: 40,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        x: new Date('2023-01-05T00:00:00Z'),
        y: 50,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface: QueryInterface): Promise<void> => {
    await queryInterface.bulkDelete('data_points', {
      x: {
        [Op.between]: [new Date('2023-01-01T00:00:00Z'), new Date('2023-01-05T00:00:00Z')]
      }
    }, {});
  }
};

export default seedData;










// import { QueryInterface } from 'sequelize';

// // Define the seed data
// const seedData = {
//   up: async (queryInterface: QueryInterface): Promise<void> => {
//     await queryInterface.bulkInsert('data_points', [
//       {
//         x: new Date('2023-01-01T00:00:00Z'),
//         y: 10,
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         x: new Date('2023-01-02T00:00:00Z'),
//         y: 20,
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         x: new Date('2023-01-03T00:00:00Z'),
//         y: 30,
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       // Add more data points as needed
//       {
//         x: new Date('2023-01-04T00:00:00Z'),
//         y: 40,
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         x: new Date('2023-01-05T00:00:00Z'),
//         y: 50,
//         createdAt: new Date(),
//         updatedAt: new Date()
//       }
//     ]);
//   },

//   down: async (queryInterface: QueryInterface): Promise<void> => {
//     await queryInterface.bulkDelete('data_points', {}, {});
//   }
// };

// export default seedData;
