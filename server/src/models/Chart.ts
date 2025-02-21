import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/connection.js';
import DataPoint from './datapoints.js';

interface ChartAttributes {
  id: number;
  username: string;
  title: string;
  type: 'bar' | 'line' | 'pie'; // Include chart type
  createdAt?: Date;
  updatedAt?: Date;
}

interface ChartCreationAttributes extends Optional<ChartAttributes, 'id'> {}

export class Chart extends Model<ChartAttributes, ChartCreationAttributes> implements ChartAttributes {
  public id!: number;
  public username!: string;;
  public title!: string;
  public type!: 'bar' | 'line' | 'pie'; // Include chart type

  // Timestamps
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Chart.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM('bar', 'line', 'pie'), // Include chart type
      allowNull: false,
    },
  },
  {
    tableName: 'charts',
    sequelize, // passing the `sequelize` instance is required
    timestamps: true, // Enables createdAt and updatedAt fields
  }
);

// Set up associations
Chart.hasMany(DataPoint, { foreignKey: 'chartId' });
DataPoint.belongsTo(Chart, { foreignKey: 'chartId' });

export default Chart;
