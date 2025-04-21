const express = require("express");
const CarReview = require("../models/carReviewSchema");
const router = express.Router();

router.route("/").get(async (req, res) => {
  try {
    const reviews = await CarReview.find().populate({ path: "car" });

    res.status(200).send({
      message: "success",
      data: {
        reviews,
      },
    });
  } catch (err) {
    res.status(404).send({
      message: err.message,
    });
  }
});

router.route("/").post(async (req, res) => {
  try {
    const review = await CarReview.create(req.body);

    res.status(201).send({
      message: "success",
      data: {
        review,
      },
    });
  } catch (err) {
    res.status(404).send({
      message: err.message,
    });
  }
});

module.exports = router;
