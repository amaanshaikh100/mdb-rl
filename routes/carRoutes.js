const express = require("express");
const Car = require("../models/carSchema");
const router = express.Router();

router.route("/").get(async (req, res) => {
  try {
    const cars = await Car.find();

    res.status(200).send({
      message: "success",
      data: {
        cars,
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
    const car = await Car.create(req.body);

    res.status(201).send({
      message: "success",
      data: {
        car,
      },
    });
  } catch (err) {
    res.status(404).send({
      message: err.message,
    });
  }
});

module.exports = router;
