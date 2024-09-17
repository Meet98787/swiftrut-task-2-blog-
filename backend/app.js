const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const postRoutes = require('./routes/postRoutes');
require('dotenv').config();

const app = express();

// Middleware
// app.use(cors());
app.use(cors(
origin: ("https://deploy-mern-frontend.vercel.app/"),
methods: ["POST", "
GET"],
credentials: true
app.use(express.json());

// Routes
app.use('/api', postRoutes);

// Database connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((error) => console.error('MongoDB connection error:', error));

module.exports = app;
