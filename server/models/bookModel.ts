import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  publicationDate: Date,
  isbn: String,
  categories: [String],
  description: String
});

export const Book = mongoose.model('Book', bookSchema);
