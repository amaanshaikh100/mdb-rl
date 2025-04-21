const express = require("express");
const User = require("../models/userSchema");
const router = express.Router();

router.route("/").get(async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).send({
      message: "success",
      data: {
        users,
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
    const newUser = await User.create(req.body);

    res.status(201).send({
      message: "success",
      data: {
        user: newUser,
      },
    });
  } catch (err) {
    res.status(404).send({
      message: err.message,
    });
  }
});

module.exports = router;
