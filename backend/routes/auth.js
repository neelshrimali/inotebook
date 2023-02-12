const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'WarlockWeb'

//Create a User using: POST "/api/auth/createuser".
router.post(
  "/createuser",
  [
    body("name", "Enter Valid Name!").isLength({ min: 3 }),
    body("email", "Enter Valid Email!").isEmail(),
    body("password", "Enter Valid Password!").isLength({ min: 5 }),
  ],
  async (req, res) => {
    //if there are errors then it will returns bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // check whether the user with this email exists already
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).json({
          error: "User with this email already exists",
        });
      }
      const salt = await bcrypt.genSalt(10);
      secPassword = await bcrypt.hash(req.body.password,salt);
      //create a new user
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPassword,
      });

      const data = {
        user: {
          id: user.id

      }}
      const authtoken =jwt.sign(data,JWT_SECRET);
      // console.log(jwtData);

      // res.json(user);
      res.json({authtoken})
    } catch (error1) {
      console.error(error1.message);
      res.status(500).send("Some error occured..");
    }
  }
);

module.exports = router
