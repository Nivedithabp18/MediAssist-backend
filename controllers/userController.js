// controllers/userController.js
const User = require("../models/User");
const bcrypt = require("bcrypt");

// Register user
exports.registerUser = async (req, res) => {
  try {
    const { username, fullName, age, password } = req.body;

    // Check if username exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "Username already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const newUser = new User({
      username,
      fullName,
      age,
      password: hashedPassword
    });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// Login user
exports.loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find user
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    // Login successful
    res.status(200).json({
      message: `Welcome ${user.fullName}!`,
      user: {
        _id: user._id,
        username: user.username,
        fullName: user.fullName,
        age: user.age
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
