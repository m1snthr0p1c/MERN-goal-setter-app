const express = require('express');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middlewares/errorMiddleware');
const port = process.env.port || 5000;

const app = express();

// JSON body parser
app.use(express.json());
// For URL encoded
app.use(express.urlencoded({ extended: false }));

app.use('/api/goals', require('./routes/goalRoutes'));

// Override the default express
// error handler with our own handler.
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));


