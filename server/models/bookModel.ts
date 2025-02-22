import mongoose, { Schema, Document } from 'mongoose';


// Define the User interface for the reference (assuming you have a User model already)
export interface IBook extends Document {
  title: string;
  author: string;
  publicationDate: Date;
  isbn: string;
  categories: string[];
  description: string;
}

const bookSchema: Schema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  publicationDate: { type: Date, required: true },
  isbn: { type: String, required: true, unique: true },
  categories: { type: [String], required: true },
  description: { type: String, required: true },  
});


//Adding the relation in Sequelize should ensure the user and book are linked together properly.
// If you're using Sequelize for Book, here’s an example of how you could do it:
bookSchema.virtual('users', {
  ref: 'User',
  localField: '_id',
  foreignField: 'books', // Ensure the correct foreign key setup
});

export const Book = mongoose.model<IBook>('Book', bookSchema);
