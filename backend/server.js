import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import products from './data/products.js';
import { connect } from 'mongoose';
const PORT = process.env.PORT || 5000;

connectDB();

const app = express();

app.get('/', (req, res) => {
    res.send(`Server is ready and running on port ${PORT}`);
});

app.get('/api/products', (req, res) => {
    res.send(products);
});

app.get('/api/products/:id', (req, res) => {
    const product = products.find((product) => product._id === req.params.id);
    res.send(product);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});