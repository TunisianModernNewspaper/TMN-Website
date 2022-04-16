const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();
const CoAdmin = require("../models/coAdmin");
const keys = require("../config/keys");

router.post("/login", (req, res) => {
  const name =req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  CoAdmin.findOne({ email }).then((coadmin) => {
    if (!coadmin) {
      errors.email = "coadmin not found ";
      return res.status(404).json(errors);
    } else if (coadmin && password === coadmin.password) {
      const payload = { name: coadmin.name }; // Create JWT Payload

      // Sign Token
      jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
        res.json({
          success: true,
          token: "Bearer " + token,
        });
      });
    } else {
      res.status(400).json({"message":"password incorrect "})
    }
  });
});


//post a new coadmin 

router.post("/addcoadmin", (req, res) => {
  const coadmin = new CoAdmin({
    name: req.body.name,
    lastName:req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    city : req.body.city,
    role :"co-admin",
  });

  coadmin
    .save()
    .then(() => {
      res.status(201).json({
        message: "coadmin saved successfully !",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
});



// get all co admins 

router.get("/allCoadmins", (req, res, next) => {
  CoAdmin.find()
    .then((coadmins) => {
      res.status(200).json(coadmins);
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
});

 // delete co admin

 router.delete("/deleteCoadmin/:id", (req,res) => {
  CoAdmin.deleteOne({
    _id: req.params.id,
  })
    .then(() => {
      res.send({ message: "Co admin deleted successfully!" });
    })
    .catch((error) => {
      res.status(404).json({
        error: error,
      });
    });
});

module.exports = router;
