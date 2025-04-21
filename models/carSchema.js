const mongoose = require("mongoose");

const carSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

carSchema.virtual("carReviews", {
  ref: "CarReview",
  foreignField: "car",
  localField: "_id",
});

const Car = mongoose.model("Car", carSchema);

module.exports = Car;
