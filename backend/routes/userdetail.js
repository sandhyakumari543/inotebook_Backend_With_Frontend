// routes/userdetails.js
const express = require('express');
const router = express.Router();
const UserDetails = require('../models/UserDetails');
const fetchuser = require('../middleware/fetchuser');
const { body, validationResult } = require('express-validator');

// ROUTE 1: Get All User Details
router.get('/fetchalluserdetails', fetchuser, async (req, res) => {
  try {
    const userdetails = await UserDetails.find({ user: req.user.id });
    res.json(userdetails);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// ROUTE 2: Add User Details including an image
router.post("/adduserdetails", fetchuser, async (req, res) => {
  try {
    const { name, email, education, project, achievements, image } = req.body;
    const userDetails = new UserDetails({
      name,
      email,
      education,
      project,
      achievements,
      image,
      user: req.user.id,
    });

    const savedUserDetails = await userDetails.save();
    res.json(savedUserDetails);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
