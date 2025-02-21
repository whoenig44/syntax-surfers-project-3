import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/connection.js';



// Define the attributes for the DataPoint model
interface DataPointAttributes {
  id: number;
  chartId: number; //Add chartId attribute
  title: string;
  x: Date;
  y: number;
  createdAt?: Date;
  updatedAt?: Date;
}


//Define the optional attributes for the DataPoint model
interface DataPointCreationAttributes extends Optional<DataPointAttributes, 'id'> {}

class DataPoint extends Model<DataPointAttributes, DataPointCreationAttributes>
  implements DataPointAttributes {
  public id!: number;
  public chartId!: number; // Add chartId attribute
  public title!: string; // Include title
  public x!: Date;
  public y!: number;

  // Timestamps
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

// Initialize the DataPoint model
DataPoint.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    chartId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    x: {
      type: DataTypes.DATE,
      allowNull: false
    },
    y: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  },
  {
    tableName: 'data_points',
    sequelize, // passing the `sequelize` instance is required
    timestamps: true // Enables createdAt and updatedAt fields
  }
);

export default DataPoint;
