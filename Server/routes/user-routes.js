const router = require("express").Router();

const User = require("../models/user");

//display all the users

router.get("/allusers", (req, res, next) => {
  User.find()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
});

//get one user

router.get("/allusers/:id", (res, req, next) => {
  User.findOne({
    _id: req.params.id,
  })
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((error) => {
      res.status(404).json({
        error: error,
      });
    });
});

//delete user

router.delete("/allusers/:id", (req, res, next) => {
  User.remove({
    _id: req.params.id,
  })
    .then(() => {
      res.send({ message: "user deleted successfully!" });
    })
    .catch((error) => {
      res.status(404).json({
        error: error,
      });
    });
});

module.exports = router;
