// Dependencies
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const db = mongoose.connection;
const session = require("express-session");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require('cors')

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
// app.use(cors());
app.use(cors({
    origin: function (origin, callback) {
        // allow requests with no origin 
        // (like mobile apps or curl requests)
        if (!origin) return callback(null, true);
        if (process.env.allowedOrigins.indexOf(origin) === -1) {
            var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
}));

// Error / Disconnection
db.on('error', err => console.log(err.message + ' is Mongod not running?'))
db.on('disconnected', () => console.log('mongo disconnected'))

app.listen(PORT, () => {
    console.log('Let\'s get things done on port', PORT)
})

// Routes
const notesController = require('./controllers/notes.js');
app.use('/notes', notesController);

