import { Request, Response } from 'express';
import { Book } from '../models/bookModel';

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
