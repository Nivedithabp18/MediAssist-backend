// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');        // <-- you forgot this line
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON bodies

// Routes
const userRoutes = require('./routes/userRoutes');
const reportRoutes = require('./routes/reportRoutes');

app.use('/api', userRoutes);
app.use('/api', reportRoutes);

// Root endpoint
app.get('/', (req, res) => {
  res.json({ message: 'MediAssist Backend Running!' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
