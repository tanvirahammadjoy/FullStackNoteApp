const User = require("../models/User");
const passport = require("passport");

exports.register = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await User.create({ username, password });
    req.login(user, (err) => {
      if (err) {
        console.error("Login error:", err);
        return next(err);
      }
      return res.status(200).json({ message: "Registration successful" });
    });
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res.status(400).json({ message: "Username already exists" });
    }
    console.error("Registration error:", error);
    res.status(400).json({ message: "Registration failed", error });
  }
};

exports.login = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) return next(err);
    if (!user) {
      return res.status(400).json({ message: "Invalid username or password" });
    }
    req.login(user, (err) => {
      if (err) return next(err);
      return res.status(200).json({ message: "Login successful" });
    });
  })(req, res, next);
};

exports.logout = (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      console.error("Logout error:", err);
      return next(err);
    }
    res.redirect("/login");
  });
};
