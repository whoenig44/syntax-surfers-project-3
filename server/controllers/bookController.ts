import { Request, Response } from 'express';
import { User } from '../models/user';
import { Book } from '../models/bookModel';
import { UserBooks } from '../models/userBooksModel'; //Assuming UserBooks is a Mongoose model

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

    //Create a UserBooks record in teh UserBooks collection
    const userBook = new UserBooks({ 
      userId, 
      bookId 
      checkedOut: true,
    });
    await userBook.save();

    res.status(200).json({ message: 'Book checked out successfully', userBook });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error checking out book' });
  }
};

//Return a book
export const returnBook = async (req: Request, res: Response) => {
  try {
    const { userId, bookId } = req.body;

    //Find the record in UserBooks collection
    const userBook = await UserBooks.findOne({ where: { userId, bookId } });

    if (!userBook || !userBook.checkedOut) {
      return res.status(404).json({ message: 'Book not checked out or not found' });
    }

    //Update the checkedOut status to false when returning
    userBook.checkedOut = false;
    await userBook.save();

    res.status(200).json({ message: 'Book returned successfully', userBook });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error returning book' });
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
