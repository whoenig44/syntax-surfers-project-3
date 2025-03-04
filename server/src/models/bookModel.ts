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

//Index for search functionality
bookSchema.index({ title: 'text', author: 'text', description: 'text' });

//Virtual field ot reference users who hae checked out the book
bookSchema.virtual('users', {
  ref: 'UserBooks', 
  localField: '_id',
  foreignField: 'bookId', 
});

export const Book = mongoose.model<IBook>('Book', bookSchema);