const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
var fetchuser = require("../middleware/fetchuser");

const JWT_SECRET = "WarlockWeb";

//Route 1: Create a User using: POST "/api/auth/createuser". No login required.
router.post(
  '/createuser',
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
      secPassword = await bcrypt.hash(req.body.password, salt);
      //create a new user
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPassword,
      });

      const data = {
        user: {
          id: user.id,
        },
      };
      const authtoken = jwt.sign(data, JWT_SECRET);
      res.json({ authtoken });
    } catch (error1) {
      console.error(error1.message);
      res.status(500).send("Internal server error..");
    }
  }
);

//Route 2: Authenticate a User using: POST "/api/auth/login". No login required.
router.post(
  '/login',
  [
    body("email", "Enter Valid Email!").isEmail(),
    body("password", "Password cannot be blank!!").exists(),
  ],
  async (req, res) => {
    //if there are errors then it will returns bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ error: "Please try to login with correct credentials!" });
      }
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        return res
          .status(400)
          .json({ error: "Please try to login with correct credentials!" });
      }
      const data = {
        user: {
          id: user.id,
        },
      };
      const authtoken = jwt.sign(data, JWT_SECRET);
      res.json({ authtoken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server error..");
    }
  }
);

//Route 3: Get a User using: POST "/api/auth/getuser". login required
router.post('/getuser', fetchuser, async (req, res) => {
  try {
    userId = req.user.id;
    const user = await User.findById(userId).select("-password")
    res.send(user)

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error..");
  }
});

module.exports = router;
