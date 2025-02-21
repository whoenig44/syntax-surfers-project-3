import { Router } from 'express';
import { userRouter } from './user-routes.js';
import { noteRouter } from './notes-routes.js';  
import { chartRouter } from './chartRoutes.js';  // Import the chartRouter

const router = Router();

router.use('/users', userRouter);
router.use('/notes', noteRouter);
router.use('/charts', chartRouter);  // Use the chartRouter

export default router;
