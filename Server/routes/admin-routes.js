const express = require("express");
require("dotenv").config;
const jwt = require("jsonwebtoken");
const router = express.Router();
const Admin = require("../models/admin");
const keys = require("../config/keys");
const CoAdmin = require("../models/coAdmin");

router.post("/login", (req, res) => {
  const admin = new Admin({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    role :"admin" ,
  });

  if (
    admin.name === process.env.ADMIN_NAME &&
    admin.email === process.env.ADMIN_EMAIL &&
    admin.password === process.env.ADMIN_PASSWORD
  ) {
    const payload = { name: admin.name }; // Create JWT Payload

    // Sign Token
    jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
      res.json({
        success: true,
        token: "Bearer " + token,
      });
    });
  } else {
    res.status(400).json({"message" :"password incorrect "})
  }
});









module.exports = router;
