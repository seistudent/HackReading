// Dependencies
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const db = mongoose.connection;
const session = require("express-session");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

dotenv.config();

// Environment Variables (getting ready for Heroku)
const PORT = process.env.PORT || 3004
console.log("url", process.env.MONGODB_COMPASS)
const mongoURI = process.env.MONGODB_URI || process.env.MONGODB_COMPASS

// Connect to Mongo
mongoose.connect(mongoURI, { useNewUrlParser: true },
    () => console.log('MongoDB connection established:', mongoURI)
)

// Middleware
app.use(express.json()); //use .json(), not .urlencoded()

// Error / Disconnection
db.on('error', err => console.log(err.message + ' is Mongod not running?'))
db.on('disconnected', () => console.log('mongo disconnected'))

app.listen(PORT, () => {
    console.log('Let\'s get things done on port', PORT)
})

// Routes
const notesController = require('./controllers/notes.js');
app.use('/notes', notesController);