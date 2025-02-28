import  User from '../models/user.js';
import { Book } from '../models/bookModel.js';
import { UserBooks } from '../models/userBooksModel.js';
//import { checkOutBook, getBooksByCategory } from '../controllers/bookController.js';

interface ReturnBookArgs {
  userId: string;
  bookId: string;
}


export const resolvers = {
  Query: {
    getBooksByCategory: async (_: any, { category }: any) => {
        try {
            const books = await Book.find({ categories: category });
            return books;
        }   catch (err) {
            throw new Error('Error fetching books by category');
        }
    }, 
  
  userBooks: async (_: any, { userId }: any) => {
    try {
      const userBooks = await UserBooks.find({ userId, checkedOut: true });

      if (!userBooks || userBooks.length === 0) {
        throw new Error('No books checked out by this user');
      }
      
      //Fetch the books corresponding to the userBooks
      const books = await Book.find({ 
        _id: { $in: userBooks.map((userBook: { bookId: any; }) => userBook.bookId) }, 
    });

    return books;
  } catch (err) {
    throw new Error('Error fetching user books');
  }
},
},


  Mutation: {
    //Check out a book for a user.
    checkOutBook: async (_: any, { userId, bookId }: any) => {
      try {
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

        //Create a new entry in the UserBooks collection for this checkout
        const userBook = new UserBooks({
          userId,
          bookId,
          checkedOut: true,
          cheeckoutDate: new Date(),
        });
        await userBook.save();

        return userBook;
      } catch (err) {
        throw new Error('Error checking out book');
      }
    },
    returnBook: async (_: any, { userId, bookId }: ReturnBookArgs) => {
        try {
            //Find the user-book relationship
            const userBooks = await UserBooks.findOne({ userId, bookId });

            console.log('userBooks', userBooks); //Log result

            if (!userBooks || !userBooks.checkedOut) {
                throw new Error('Book not checked out or not found');
            }

            //Mark book as returned
            userBooks.checkedOut = false;
            userBooks.returnDate = new Date();
            await userBooks.save();

            return userBooks;
          } catch (err) {
            console.error('Error', err); //Log error
            throw new Error('Error returning book');
        }
      },
   },
};





    