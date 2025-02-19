import express from 'express';
import mongoose from 'mongoose';
import bookRoutes from './routes/bookRoutes';

const app = express();
const PORT = process.env.PORT || 5174;

// Middleware
app.use(express.json());

// Use routes
app.use('/api', bookRoutes);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/nerdLibrary', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
