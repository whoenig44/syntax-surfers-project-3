import User from '../models/user.js';
import { Book } from '../models/bookModel.js';
import { UserBooks } from '../models/userBooksModel.js';
import JWT from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

interface ReturnBookArgs {
  userId: string;
  bookId: string;
}

interface AddBookArgs {
  title: string;
  author: string;
  publicationDate: string;
  isbn: string;
  categories: string[];
  description: string;
}

interface DeleteBookArgs {
  title?: string;
  isbn?: string;
}

export const resolvers = {
  Query: {
    getBooksByCategory: async (_: any, { category }: any) => {
      try {
        const books = await Book.find({ categories: category });
        return books;
      } catch (err) {
        throw new Error('Error fetching books by category');
      }
    },

    checkOuts: async (_: any) => {
      try {
        const checkOuts = await UserBooks.find({ checkedOut: true });
        console.log("Checkouts:", checkOuts);
        return checkOuts;
      } catch (err) {
        throw new Error('Error fetching checked out books');
      }
    },

    getBooksByName: async (_: any, { author }: any) => {
      try {
        const books = await Book.find({ author });
        return books;
      } catch (err) {
        throw new Error('Error fetching books by author');
      }
    },

    getBooksByTitle: async (_: any, { title }: any) => {
      try {
        const books = await Book.find({ title });
        return books;
      } catch (err) {
        throw new Error('Error fetching books by title');
      }
    },

    getBooksBySearch: async (_: any, { author, title, category }: any) => {
      try {
        const books = await Book.find({ $or: [{ title: title }, { author: author }, { categories: category }] });
        return books;
      } catch (error) {
        console.error('Error fetching books by author:', error);
        throw new Error('Server Error');
      }
    },

    userBooks: async (_: any, __: any, ctx: any) => {
      try {
        const userId = ctx.session.id;
        console.log("Fetching books for user:", userId);

        const userBooks = await UserBooks.find({ userId, checkedOut: true });
        console.log("UserBooks result:", userBooks);

        if (!userBooks || userBooks.length === 0) {
          console.log("No books found for user.");
          return []; // Return an empty array instead of throwing an error
        }

        const books = await Book.find({
          _id: { $in: userBooks.map((userBook: { bookId: any }) => userBook.bookId) },
        });

        console.log("Books fetched:", books);

        return books;
      } catch (err) {
        console.error("Error in userBooks resolver:", err);
        throw new Error("Error fetching user books");
      }
    },
  },

  Mutation: {
    checkOutBook: async (_: any, { bookId }: any, ctx: any) => {
      console.log("resolver context", ctx);
      try {
        const userId = ctx.session.id;
        const user = await User.findById(userId);
        const book = await Book.findById(bookId);

        if (!user || !book) {
          throw new Error('User or book not found');
        }

        const existingCheckout = await UserBooks.findOne({
          bookId,
          checkedOut: true,
        });

        if (existingCheckout) {
          throw new Error('Book already checked out');
        }

        const userBook = new UserBooks({
          userId,
          bookId,
          checkedOut: true,
        });
        await userBook.save();

        return userBook;
      } catch (err) {
        console.log(err);
        throw new Error('Error checking out book');
      }
    },

    returnBook: async (_: any, { bookId }: ReturnBookArgs, ctx: any) => {
      try {
        const userId = ctx.session.id;
        const userBooks = await UserBooks.findOne({ userId, bookId });

        if (!userBooks || !userBooks.checkedOut) {
          throw new Error('Book not checked out or not found');
        }

        userBooks.checkedOut = false;
        await userBooks.save();

        return userBooks;
      } catch (err) {
        throw new Error('Error returning book');
      }
    },

    addBook: async (_: any, { title, author, publicationDate, isbn, categories, description }: AddBookArgs) => {
      try {
        const newBook = new Book({
          title,
          author,
          publicationDate,
          isbn,
          categories,
          description,
        });
        await newBook.save();
        return newBook;
      } catch (err) {
        throw new Error('Error adding book');
      }
    },

    deleteBook: async (_: any, { title, isbn }: DeleteBookArgs) => {
      try {
        const book = await Book.findOne({ $or: [{ title }, { isbn }] });

        if (!book) {
          throw new Error('Book not found');
        }

        await book.deleteOne();
        return book;
      } catch (err) {
        throw new Error('Error deleting book');
      }
    },

    signup: async (_: any, { username, email, password }: any) => {
      try {
        console.log(username, email, password);
        const user = await User.create({ username, email, password });

        if (!user) {
          throw new Error('Could not create user');
        }
        console.log(user);
        return user;
      } catch (err) {
        console.log(err);
        throw new Error('Error creating user');
      }
    },

    login: async (_: any, { username, password }: any) => {
      try {
        console.log(username, password);
        const user = await User.findOne({ username });

        if (!user) {
          throw new Error('Invalid login credentials');
        }
        console.log(user);
        const passwordCompare = await bcrypt.compare(password, user.password);

        console.log("hash password", passwordCompare);

        if (!passwordCompare) {
          throw new Error('Invalid login credentials');
        }
        const AuthToken = JWT.sign({ id: user._id, email: user.email, user: user.username }, process.env.JWT_SECRET!);
        console.log(AuthToken);
        return { token: AuthToken, user };
      } catch (err) {
        console.log(err);
        throw new Error('Error logging in');
      }
    },
  },
};