import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

//Extend Express REquest to include user property
declare module 'express' {
  export interface Request {
    user?: JwtPayload;
  }
}

// Define the interface for the JWT payload
interface JwtPayload {
  id: string;
  username: string;
  email: string;
}

// Middleware function to authenticate JWT token
export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  // Get the authorization header from the request
  const authHeader = req.headers.authorization;

  // Check if the authorization header is present
  if (!authHeader) {
    return res.status(401).json({message: "No authorization token provided."}); // Send unauthorized status if no authorization header is present
  }  
    
    // Extract the token from the authorization header    
    const token = authHeader.split(' ')[1];

    // Get the secret key from the environment variables
    const secretKey = process.env.JWT_SECRET_KEY || '';

    // Verify the JWT token
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        console.error('JWT verification error:', err);
        return res.status(403).json({message: "Invalid or expired token."}); // Send forbidden status if the token is invalid
      }

      // Attach the user information to the request object
      req.user = decoded as JwtPayload;
      return next(); // Call the next middleware function/route handler
    });
    return;
  }; 