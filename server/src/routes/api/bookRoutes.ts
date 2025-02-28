import express from 'express';
import { getBooksByCategory, checkOutBook, returnBook, getBooksByUser } from '../../controllers/bookController.js';

const router = express.Router();

//Fetch books by category route
router.get('/books/category/:category', getBooksByCategory); 

//Checking out a book route
router.post('/books/checkout', checkOutBook); 

//Returning a book route
router.post('/books/return', returnBook);

//Fetch books by user route
router.get('/books/user/:userId', getBooksByUser);

export default router;