const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Configure PostgreSQL connection
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

// Sample route
app.get('/', (req, res) => {
    res.send('API is working');
});

// Add routes
const routes = require('./routes');
app.use('/api', routes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});