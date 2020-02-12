// Dependencies
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const db = mongoose.connection;
const session = require("express-session");
const bodyParser = require("body-parser");

// Environment Variables
const PORT = process.env.PORT || 3000;

const mongoURI =
  process.env.MONGODB_URI ||
  "mongodb+srv://kkarunia23:generalassembly123@cluster0-knxzn.mongodb.net/sticky?retryWrites=true&w=majority";

// Connect to Mongo
mongoose.connect(
  mongoURI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  () => console.log("MongoDB connection established:", mongoURI)
);

// Error / Disconnection
db.on("error", err => console.log(err.message + " is Mongod not running?"));
db.on("disconnected", () => console.log("mongo disconnected"));

// Middleware
app.use(express.json()); // returns middleware that only parses JSON
app.use(express.static("public"));
app.use(
  session({
    secret: "mutusamy chen",
    resave: false,
    saveUninitialized: false
  })
);
// Routes
// const commitmentsController = require("./controller/commitments.js");
// app.use("/commitments", commitmentsController);
// const sessionsControllers = require("./controller/sessions.js");
// app.use("/sessions", sessionsControllers);
const usersControllers = require("./controller/users.js");
app.use("/users", usersControllers);
// const progressUpdateControllers = require("./controller/progressUpdate.js");
// app.use("/progressUpdate", progressUpdateControllers);

// this will catch any route that doesn't exist
app.get("*", (req, res) => {
  res.status(404).json("Sorry, page not found");
});

app.get("/", (req, res) => {
  res.send("hello jello");
});

app.listen(PORT, () => {
  console.log("Let's get things done on port", PORT);
});
