const express = require("express");
const Product = require("../models/productSchema");
const router = express.Router();

router.route("/").get(async (req, res) => {
  try {
    const products = await Product.find().populate("reviews");

    res.status(200).send({
      message: "success",
      data: {
        products,
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
    const newProduct = await Product.create(req.body);

    res.status(201).send({
      message: "success",
    });
  } catch (err) {
    res.status(404).send({
      message: err.message,
    });
  }
});

module.exports = router;
