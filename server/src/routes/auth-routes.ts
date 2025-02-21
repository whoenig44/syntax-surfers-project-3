import { Router, Request, Response } from 'express';
import { User } from '../models/user.js';  // Import the User model
import jwt from 'jsonwebtoken';  // Import the JSON Web Token library
import bcrypt from 'bcrypt';  // Import the bcrypt library for password hashing
import { authenticateToken } from '../middleware/auth.js';

// Login function to authenticate a user
export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;  // Extract username and password from request body
  console.log(username, password)

  try {
    // Find the user in the database by username
  const user = await User.findOne({
    where: { username },
    attributes: ['id', 'username', 'password'],
  });

  // If user is not found, send an authentication failed response
  if (!user) {
    return res.status(401).json({ message: 'Authentication failed' });
  }

  // Compare the provided password with the stored hashed password
  const passwordIsValid = await bcrypt.compare(password, user.password);
  // If password is invalid, send an authentication failed response
  if (!passwordIsValid) {
    return res.status(401).json({ message: 'Authentication failed' });
  }

  // Get the secret key from environment variables
  const secretKey = process.env.JWT_SECRET_KEY || '';

  // Generate a JWT token for the authenticated user
  const token = jwt.sign({ username: user.username, id: user.id }, secretKey, { expiresIn: '1h' });
  return res.json({ token });  // Send the token as a JSON response
  } catch (error) {
    console.log(error)
    return res.json({
      success: false, 
    })  
  }

  
};

export const checkAuth = async (_: Request, res: Response) => {
  // TODO: If the user exists and the password is correct, return a JWT token
  try { 
    res.json({
      success: true,     
  });
  } catch (error) {
    console.log(error)
    res.json({
      success: false, 
    });
  }
};

// Create a new router instance
const router = Router();

// POST /login - Login a user
router.post('/login', login);  // Define the login route
router.get('/checkAuth', authenticateToken, checkAuth)

export default router;  // Export the router instance
