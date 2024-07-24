const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// Define the register route
router.post("/register", authController.register);

// Define the login route
router.post("/login", authController.login);

// Define the logout route
router.post("/logout", authController.logout);

module.exports = router;
