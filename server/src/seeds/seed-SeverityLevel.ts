import { QueryInterface } from 'sequelize';
import { Op } from 'sequelize';

// Define the seed data for severity level
const seedSeverityLevel = {
  up: async (queryInterface: QueryInterface): Promise<void> => {
    await queryInterface.bulkInsert('data_points', [
      {
        chartId: 1,  // Assuming chartId 1 is relevant, adjust accordingly
        x: new Date('2023-04-01T00:00:00Z'),
        y: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        chartId: 1,  // Assuming chartId 1 is relevant
        x: new Date('2023-04-02T00:00:00Z'),
        y: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        chartId: 1,  // Assuming chartId 1 is relevant
        x: new Date('2023-04-03T00:00:00Z'),
        y: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        chartId: 1,  // Assuming chartId 1 is relevant
        x: new Date('2023-04-04T00:00:00Z'),
        y: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        chartId: 1,  // Assuming chartId 1 is relevant
        x: new Date('2023-04-05T00:00:00Z'),
        y: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        chartId: 1,  // Assuming chartId 1 is relevant
        x: new Date('2023-04-06T00:00:00Z'),
        y: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        chartId: 1,  // Assuming chartId 1 is relevant
        x: new Date('2023-04-07T00:00:00Z'),
        y: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        chartId: 1,  // Assuming chartId 1 is relevant
        x: new Date('2023-04-08T00:00:00Z'),
        y: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        chartId: 1,  // Assuming chartId 1 is relevant
        x: new Date('2023-04-09T00:00:00Z'),
        y: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        chartId: 1,  // Assuming chartId 1 is relevant
        x: new Date('2023-04-10T00:00:00Z'),
        y: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface: QueryInterface): Promise<void> => {
    await queryInterface.bulkDelete('data_points', {
      x: {
        [Op.between]: [new Date('2023-04-01T00:00:00Z'), new Date('2023-04-10T00:00:00Z')]
      }
    }, {});
  }
};

export default seedSeverityLevel;
