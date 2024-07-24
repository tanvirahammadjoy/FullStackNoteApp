const express = require("express");
const path = require("path");
const { isAuthenticated } = require("../middleware/authMiddleware");
const router = express.Router();

// Serve the main application file
router.get("/", isAuthenticated, (req, res) => {
  res.sendFile(path.join(__dirname, "../../client/index.html"));
});

// Serve the login page
router.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "../../client/public/login.html"));
});

// Serve the register page
router.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "../../client/public/register.html"));
});

// Use auth routes
const authRoutes = require("./authRoutes");
router.use("/auth", authRoutes);

module.exports = router;
