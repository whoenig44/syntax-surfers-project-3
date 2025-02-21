import { DataTypes, Sequelize, Model, Optional } from 'sequelize';
import { User } from './user.js';


// Define the attributes for the User model
interface NoteAttributes {
  id: number;
  title: string;
  date: string;
  message: string;
  authorID: number;
}

// Define the optional attributes for creating a new User
interface NoteCreationAttributes extends Optional<NoteAttributes, 'id'> {}

// Define the User class extending Sequelize's Model
export class Note extends Model<NoteAttributes, NoteCreationAttributes> implements NoteAttributes {
  public id!: number;
  public title!: string;
  public date!: string;
  public message!: string;
  public authorID!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public static associate() {
    this.belongsTo(User, { foreignKey: 'authorID', as: 'author' });
  }

}

// Define the UserFactory function to initialize the User model
export function NoteFactory(sequelize: Sequelize): typeof Note {
  Note.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      date: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      message: {
        type: DataTypes.STRING,
        allowNull: false,
      },
        authorID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
    {
      tableName: 'notes',  // Name of the table in PostgreSQL
      timestamps: false,
      sequelize,            // The Sequelize instance that connects to PostgreSQL
      
    }
  );

  return Note;  // Return the initialized User model
}
