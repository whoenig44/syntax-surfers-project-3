import express, { Application } from 'express';
//import mongoose from 'mongoose';
import { ApolloServer } from 'apollo-server-express';  // Apollo Server for GraphQL
import { typeDefs } from './graphql/typeDefs';  // Import GraphQL schema
import { resolvers } from './graphql/resolvers';  // Import GraphQL resolvers
import bookRoutes from './routes/api/bookRoutes';  // Your existing routes
import { connectDB } from './config/connection';

const app: Application = express();
const PORT = process.env.PORT || 5174;


// Middleware to parse JSON requests
app.use(express.json());

// Set up your routes (API routes) as needed
app.use('/api', bookRoutes);

// Connect to MongoDB from cconfig file
connectDB(); 

// Set up Apollo Server with GraphQL
const server = new ApolloServer({
  typeDefs,  // GraphQL schema definitions
  resolvers, // GraphQL resolvers
});

// Apply the Apollo server middleware to your express app
server.applyMiddleware({ app, path: '/graphql' });

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`GraphQL endpoint is available at http://localhost:${PORT}/graphql`);
});

export default connectDB;
























// const forceDatabaseRefresh = false;
// import cors from "cors";

// import dotenv from 'dotenv';
// dotenv.config();

// import express from 'express';
// import sequelize from './config/connection.js';
// import routes from './routes/index.js';
// import path from 'node:path';
// import { fileURLToPath } from 'node:url';
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);


// const app = express();
// const PORT = process.env.PORT || 3001;

// // Serves static files in the entire client's dist folder
// app.use(cors());

// app.use(express.static(path.join(__dirname, '../../client/dist')))
// app.use(express.json());
// app.use(routes);
// app.get('*', (_req, res) => {
//   res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
// });


// sequelize.sync({force: forceDatabaseRefresh}).then(() => {
//   app.listen(PORT, () => {
//     console.log(`Server is listening on port ${PORT}`);
//   });
// });
