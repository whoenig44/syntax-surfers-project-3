import express from 'express';
import { getBooksByCategory } from '../controllers/bookController';

const router = express.Router();

router.get('/books/category/:category', getBooksByCategory); // Define route for fetching books by category

export default router;
