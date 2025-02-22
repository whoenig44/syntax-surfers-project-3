import express from 'express';
import { getBooksByCategory, checkOutBook, returnBook } from '../controllers/bookController';

const router = express.Router();

router.get('/books/category/:category', getBooksByCategory); // Define route for fetching books by category
router.post('/books/checkout', checkOutBook); // Define route for checking out a book
router.post('/books/return', returnBook); // Define route for returning a book

export default router;
