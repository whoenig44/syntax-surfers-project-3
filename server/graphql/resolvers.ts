import { Book } from '../models/bookModel';

export const resolvers = {
  Query: {
    books: async () => await Book.find(),
    book: async (_: any, { id }: { id: string }) => await Book.findById(id),
  },
  Mutation: {
    addBook: async (_: any, args: any) => {
      const newBook = new Book(args);
      return await newBook.save();
    },
    updateBook: async (_: any, { id, ...updates }: any) => {
      return await Book.findByIdAndUpdate(id, updates, { new: true });
    },
    deleteBook: async (_: any, { id }: { id: string }) => {
      return await Book.findByIdAndDelete(id);
    },
  },
};
