import express, { Application } from 'express';
import path from 'path'
import { fileURLToPath } from 'url'; //Import for handling ES module paths
import { dirname } from 'path'; //Import for handling ES module paths
import mongoose from 'mongoose';
import { ApolloServer } from '@apollo/server';  
import { expressMiddleware } from '@apollo/server/express4';
import { typeDefs } from './graphql/typeDefs.js';
import { resolvers } from './graphql/resolvers.js';  
import bookRoutes from './routes/api/bookRoutes.js';  
import  connectDB  from './config/connection.js';

//__dirname is not available when using ES modules, so we use the following two lines to get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app: Application = express();
const PORT = process.env.PORT || 5174;

console.log('Resolved typeDefs path:', path.resolve(__dirname, './graphql/typeDefs.js'));

const server = new ApolloServer({
  typeDefs,  
  resolvers, 
});

connectDB();
  const db = mongoose.connection;  
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const startApolloServer = async () => {
  await server.start();
  
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.use('/api', bookRoutes);
  
  app.use('/graphql', expressMiddleware(server)); 
  

  // if we're in production, serve client/dist as static assets
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));

    app.get('*', (_req, res) => { 
      res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });
  }
  

  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
  });
};

startApolloServer();





