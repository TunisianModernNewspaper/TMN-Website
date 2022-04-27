const router = require("express").Router();
const Category = require("../models/category");

//add new category

router.post(
  "/addCategory",
  (req, res, next) => {
    const category = new Category({
      title: req.body.title,
      refrencesTo: req.body.refrencesTo,
    });

    category
      .save()
      .then(() => {
        res.status(201).json({
          message: "category saved successfully!",
        });
      })
      .catch((error) => {
        res.status(400).json({
          error: error,
        });
      });
  }
);

//display all the categorys

router.get("/allCategorys", (req, res, next) => {
  Category.find()
    .then((categorys) => {
      res.status(200).json(categorys);
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
});

//get one category

router.get("/allCategorys/:id", (req,res, next) => {
  Category.findOne({
    _id: req.params.id,
  })
    .then((category) => {
      res.status(200).json(category);
    })
    .catch((error) => {
      res.status(404).json({
        error: error,
      });
    });
});

//delete category

router.delete("/allCategorys/:id", (req, res, next) => {
  console.log(req.params.id);
  Category.remove({
    _id: req.params.id,
  })
    .then(() => {
      res.send({ message: "category deleted successfully!" });
    })
    .catch((error) => {
      res.status(404).json({
        error: error,
      });
    });
});

module.exports = router;
