import mongoose, { Schema, Document } from 'mongoose';


// Define the User interface for the reference
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


//Virtual field ot reference users who hae checked out the book
bookSchema.virtual('users', {
  ref: 'User', //Need to match this to the user model name
  localField: '_id',
  foreignField: 'checkedOutBooks', // Does this match the filed in teh user schema?
});

export const Book = mongoose.model<IBook>('Book', bookSchema);