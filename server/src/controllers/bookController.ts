import { Request, Response } from 'express';
import  User from '../models/user.js';
import { Book } from '../models/bookModel.js';
import { UserBooks } from '../models/userBooksModel.js'; 

//Checkout a book
export const checkOutBook = async (req: Request, res: Response) => {
  try {
    const { userId, bookId } = req.body;

    // Check if the book is available
    const user = await User.findById(userId);
    const book = await Book.findById(bookId);

    if (!user || !book) {
      return res.status(404).send('User or book not found');
    }

    //Check if the book is already checked out by another user
    const existingCheckout = await UserBooks.findOne({
      bookId, 
      checkedOut: true,
    });

    if (existingCheckout) {
      return res.status(400).json({ message: 'Book already checked out' });
    }

    //Create a UserBooks record in the UserBooks collection
    const userBook = new UserBooks({ 
      userId, 
      bookId, 
      checkedOut: true,
      checkoutDate: new Date(),
    });
    await userBook.save();

    //Updated the checkedOutBooks array in the User model
    user.checkedOutBooks.push(bookId);
    await user.save();


    return res.status(200).json({ message: 'Book checked out successfully', userBook });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Error checking out book' });
  }
};

//Return a book
export const returnBook = async (req: Request, res: Response) => {
  try {
    const { userId, bookId } = req.body;

    //Find the record in UserBooks collection
    const userBook = await UserBooks.findOne({ userId, bookId });

    if (!userBook || !userBook.checkedOut) {
      return res.status(404).json({ message: 'Book not checked out or not found' });
    }

    //Update the checkedOut status to false when returning
    userBook.checkedOut = false;
    await userBook.save();

    return res.status(200).json({ message: 'Book returned successfully', userBook });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Error returning book' });
  }
};


export const getBooksByCategory = async (req: Request, res: Response) => {
  const category = req.params.category;

  try {
    const books = await Book.find({ categories: category });
    res.json(books);  // Send back the books as a response
  } catch (error) {
    console.error('Error fetching books by category:', error);
    res.status(500).send('Server Error');
  }
};

// Get books checked out by a user
export const getBooksByUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params; // Get the userId from the request params

    // Find all entries in the UserBooks collection where the userId matches and checkedOut is true
    const userBooks = await UserBooks.find({ userId, checkedOut: true });

    if (!userBooks || userBooks.length === 0) {
      return res.status(404).json({ message: 'No books found for this user.' });
    }

    // Fetch the details of each book based on the bookId stored in userBooks
    const books = await Book.find({
      '_id': { $in: userBooks.map((userBook) => userBook.bookId) }
    });

    return res.json(books); // Return books to the user
  } catch (err) {
    console.error('Error fetching books by user:', err);
    return res.status(500).json({ message: 'Internal server error' });
  }
}