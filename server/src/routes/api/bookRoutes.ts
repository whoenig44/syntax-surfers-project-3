import express from 'express';
import { getBooksByCategory, checkOutBook, returnBook, getBooksByUser, getBooksBySearch  } from '../../controllers/bookController.js';

const router = express.Router();

//Fetch books by category route
router.get('/books/category/:category', getBooksByCategory); 

//Fetch books by author route
// router.get('/books/author/:author', getBooksByAuthor);

//Checking out a book route
router.post('/books/checkout', checkOutBook); 

//Searching book by author, title, or category
router.post('/books/search', getBooksBySearch);


//Returning a book route
router.post('/books/return', returnBook);

//Fetch books by user route
router.get('/books/user/:userId', getBooksByUser);

export default router;