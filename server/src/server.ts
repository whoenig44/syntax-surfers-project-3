import express, { Application } from 'express';
import path from 'path'
import mongoose from 'mongoose';
import { ApolloServer } from '@apollo/server';  // Apollo Server for GraphQL
import { expressMiddleware } from '@apollo/server/express4';
import { typeDefs } from './graphql/typeDefs.js';  // Import GraphQL schema
import { resolvers } from './graphql/resolvers.js';  // Import GraphQL resolvers
import bookRoutes from './routes/api/bookRoutes.js';  // Your existing routes
import { connectDB } from './config/connection.js';
import { fileURLToPath } from 'url';
import cors from 'cors';
import JWT from 'jsonwebtoken';


const app: Application = express();
const PORT = process.env.PORT || 5174;
// Set up Apollo Server with GraphQL
const server = new ApolloServer({
  typeDefs,  // GraphQL schema definitions
  resolvers, // GraphQL resolvers
  
  
});

const startApolloServer = async () => {
  await server.start();
  
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.use('/api', bookRoutes);
  
  app.use('/graphql', cors(), expressMiddleware(server, {
    context: async ({ req }:any) => {
    const authTokenHeader = req.headers.authorization || '';
    const authTokenValue = authTokenHeader.split(' ')[1];
    if (authTokenValue) {
    const verifiedToken = JWT.verify(authTokenValue, process.env.JWT_SECRET!);
    console.log("verifiedToken", verifiedToken);
      return { session: verifiedToken }; //Session contains user's ID, username, and email

    } else {
      return { user: null };
    }
  }
  })); 
  
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  // if we're in production, serve client/dist as static assets
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../../client/dist')));

    app.get('*', (_req, res) => { //all unmatched routes return the React index.html file allowing React to handle the routing
      res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
    });
  }

  connectDB();
  const db = mongoose.connection;  
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));

  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
  });
};

startApolloServer();





// function expressMiddleware(server: ApolloServer<import("apollo-server-express").ExpressContext>): import("express-serve-static-core").RequestHandler<{}, any, any, import("qs").ParsedQs, Record<string, any>> {
//   throw new Error('Function not implemented.');
// }
// // Middleware to parse JSON requests
// app.use(express.json());

// // Set up your routes (API routes) as needed
// app.use('/api', bookRoutes);

// // Connect to MongoDB from cconfig file
// connectDB(); 


// // Apply the Apollo server middleware to your express app
// app.use('/graphql', expressMiddleware(server));


// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
//   console.log(`GraphQL endpoint is available at http://localhost:${PORT}/graphql`);
// });

// export default connectDB;
