const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema(
  {
    review: {
      type: String,
      required: true,
    },
    product: {
      type: mongoose.Schema.ObjectId,
      ref: "Product",
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

reviewSchema.pre(/^find/, function (next) {
  this.populate({
    path: "product",
  }).populate({
    path: "user",
  });

  next();
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
