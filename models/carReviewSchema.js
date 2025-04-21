const mongoose = require("mongoose");

const carReviewSchema = mongoose.Schema(
  {
    review: {
      type: String,
      required: true,
    },
    car: {
      type: mongoose.Schema.ObjectId,
      ref: "Car",
    },
  },
  {
    timestamps: true,
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// carReviewSchema.pre(/^find/, function (next) {
//   this.car = this.populate({
//     path: "car",
//   });

//   next();
// });

const CarReview = mongoose.model("CarReview", carReviewSchema);

module.exports = CarReview;
