const express = require('express');

const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.use(routes);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/bootcampforum');

// Start the API server
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));