import { Request, Response } from 'express';
import { User } from '../models/user';
import { Book } from '../models/bookModel';
import { UserBooks } from '../models/userBooksModel';

//Checkout a book
export const checkOutBook = async (req: Request, res: Response) => {
  try {
    const { userId, bookId } = req.body;

    // Check if the book is available
    const user = await User.findByPk(userId);
    const book = await Book.findByPk(bookId);

    if (!user || !book) {
      return res.status(404).send('User or book not found');
    }

    const [userBook, created] = await UserBooks.findOrCreate({
      where: { userId, bookId },
      defaults: { checkedOut: true },
    });

    if (!created) {
     userBook.checkedOut = true;
     await userBook.save();
    }

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

    const userBook = await UserBooks.findOne({ where: { userId, bookId } });

    if (!userBook || !userBook.checkedOut) {
      return res.status(404).json({ message: 'Book not checked out or not found' });
    }

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
