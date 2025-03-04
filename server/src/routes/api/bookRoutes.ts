import express from 'express';
<<<<<<< HEAD
import { getBooksByCategory, checkOutBook, returnBook, getBooksByUser } from '../../controllers/bookController.js';
=======
import { getBooksByCategory, checkOutBook, returnBook, getBooksByUser, getBooksBySearch  } from '../../controllers/bookController.js';
>>>>>>> db8b55816404d40a77eedbfd30e4a41df7e550d3

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