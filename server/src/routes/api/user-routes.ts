import express from 'express';
import type { Request, Response } from 'express';
import  User  from '../../models/user.js';
//import { Book }  from '../../models/bookModel';
import mongoose from 'mongoose';


const router = express.Router();

// GET /users - Get all users
router.get('/', async (_req: Request, res: Response) => {
  try {
    const users = await User.find({}, { password: 0 }); // Exclude password from response
    res.json(users);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

// GET /users/:id - Get a user by id
router.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  //Validate the ObjectId format
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid user ID format' });
  }
  try {
    const user = await User.findById(id)    
    if (user) {
      return res.json(user);
    } else {
      return res.status(404).json({ message: 'User not found' });
    }
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
});

// POST /users - Create a new user
router.post('/', async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  try {
    //Check if the user already exists
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }
    //crate a new user instance
    const newUser = new User({ username, email, password });
    // Set the password (this will hash the password before saving
    await newUser.setPassword(password);

    // Save the user
    await newUser.save();

    //Generate an auth token for the new user
    const token = newUser.generateAuthToken();

    return res.status(201).json({
      message: 'User created successfully',
      user: { username: newUser.username, email: newUser.email }, // Avoid sending the password in the response
      token,
    });
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
});

// PUT /users/:id - Update a user by id
router.put('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { username, password } = req.body;
  
  //Validate the ObjectId format
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid user ID' });
  }
  try {  
    const user = await User.findById(id); //Find user by ID

    if (user) {
      user.username = username || user.username; 
      if (password) {
        user.password = password; // Set the new password
          await user.setPassword(password); //Hash the new password      
      }
      await user.save();
      return res.json(user);
    } else {
      return res.status(404).json({ message: 'User not found' });
    }
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
});

// DELETE /users/:id - Delete a user by id
router.delete('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  //Validate the ObjectId format
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid user ID format' });
  }

  try {
    const user = await User.findById(id);

    if (user) {
      await user.deleteOne();
      return res.json({ message: 'User deleted' });
    } else {
      return res.status(404).json({ message: 'User not found' });
    }
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
});

export { router as userRouter };
