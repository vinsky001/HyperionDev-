import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoutes from './server/routes/userRoutes.js';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express(); 
// Middleware
app.use(cors());
app.use(express.json());
// use routes
app.use('/api', userRoutes);

// app.get('/test', (req, res) => {
//   res.json({ message: 'Server is running' });
// });

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});