const express = require("express");
const session = require("express-session");
const passport = require("passport");
const bodyParser = require("body-parser");
const sequelize = require("./config/database");
const dotenv = require("dotenv");
const path = require("path");
require("./config/passport"); // Ensure passport configuration is required

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
    session({
        secret: process.env.SECRET_KEY,
        resave: false,
        saveUninitialized: false,
    })
);

app.use(passport.initialize());
app.use(passport.session());

// Serve static files from the client/public directory
app.use(express.static(path.join(__dirname, "..", "client", "public"))); // Ensure this path is correct


// Import and use the routes
const notesRoutes = require("./routes/notes");
const routes = require("./routes/index");
const authRoutes = require("./routes/authRoutes");

app.use("/auth", authRoutes);
app.use("/", routes);
app.use("/notes", notesRoutes);

// Sync Sequelize models and start the server
sequelize.sync().then(() => {
  console.log("Database connected and models synchronized.");
});

module.exports = app;
