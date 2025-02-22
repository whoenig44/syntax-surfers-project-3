import { Sequelize, DataTypes } from 'sequelize';
import { User } from './user';
import { Book } from './bookModel';

// Define the junction table for the User-Book many-to-many relationship
export const UserBooks = sequelize.define('UserBooks', {
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User, // Refers to the User model
      key: 'id',
    },
  },
  bookId: {
    type: DataTypes.INTEGER,
    references: {
      model: Book, // Refers to the Book model
      key: 'id',
    },
  },
  checkedOut: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

// Set up associations
User.belongsToMany(Book, { through: UserBooks, foreignKey: 'userId' });
Book.belongsToMany(User, { through: UserBooks, foreignKey: 'bookId' });
