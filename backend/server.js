import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';

import { connect } from 'mongoose';
import productRoutes from './routes/productRoutes.js';
const PORT = process.env.PORT || 5000;

connectDB();

const app = express();

app.get('/', (req, res) => {
    res.send(`Server is ready and running on port ${PORT}`);
});

app.use('/api/products', productRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});