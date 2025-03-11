import  User from '../models/user.js';
import { Book } from '../models/bookModel.js';
import { UserBooks } from '../models/userBooksModel.js';
//import { checkOutBook, getBooksByCategory } from '../controllers/bookController';
import JWT from 'jsonwebtoken';
import bcrypt from 'bcryptjs';



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

    checkOuts: async (_: any) => {
      try {
          const checkOuts = await UserBooks.find({ checkedOut: true });
          return checkOuts;
      }   catch (err) {
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
            const books = await Book.find
            ({ title });
            return books;
        } catch (err) {
            throw new Error('Error fetching books by title');
        }
    },

  getBooksBySearch: async (_: any, { author, title, category }: any) => {
      
    
      try {
        const books = await Book.find({$or: [{ title: title }, { author: author }, { categories: category }]});
        return books;  // Send back the books as a response
      } catch (error) {
        console.error('Error fetching books by author:', error);
        throw new Error('Server Error');
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

        //Create a new entry in the UserBooks collection for this checkout
        const userBook = new UserBooks({
          userId,
          bookId,
          checkedOut: true,
        });
        await userBook.save();

        return userBook;
      } catch (err) {
        console.log(err)
        throw new Error('Error checking out book');
      }
    },


    returnBook: async (_: any, { userId, bookId }: ReturnBookArgs) => {
        try {
            //Find the user-book relationship
            const userBooks = await UserBooks.findOne({ userId, bookId });

            if (!userBooks || !userBooks.checkedOut) {
                throw new Error('Book not checked out or not found');
            }

            //Mark book as returned
            userBooks.checkedOut = false;
            await userBooks.save();

            return userBooks;
          } catch (err) {
            throw new Error('Error returning book');
        }
      },
      signup: async (_: any, { username, email, password }: any) => {
        try {
          console.log(username, email, password);
          const user = await User.create({ username, email, password  });
          
          if (!user) {
            throw new Error('Could not create user');
          }
          console.log(user);
          // TODO: Look into why hashes aren't comparing correctly
          // const passwordCompare = await bcrypt.compare(password, user.password);
         
          // console.log(passwordCompare);
          
          // if (!passwordCompare) {
          //   throw new Error('Invalid login credentials');
          // }
          // const AuthToken = JWT.sign({ id: user._id, email: user.email, user: user.username }, process.env.JWT_SECRET!);
          // console.log(AuthToken);
          return user;
        } catch (err) {
          console.log(err);
          throw new Error('Error creating user');
        }
      },
      login: async (_: any, { username, password }: any) => {
        try {
          console.log(username, password);
          const user = await User.findOne({ username  });
          
          if (!user) {
            throw new Error('Invalid login credentials');
          }
          console.log(user);
          // TODO: Look into why hashes aren't comparing correctly
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





    