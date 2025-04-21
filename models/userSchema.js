const mongoose = require("mongoose");
// const Review = require("../models/reviewSchema");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  reviews: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Review",
    },
  ],
});

userSchema.pre(/^find/, function (next) {
  this.populate({
    path: "reviews",
    select: "-__v -createdAt -updatedAt",
  });

  next();
});

// userSchema.pre("save", async function (next) {
//   const reviews = this.reviews.map(async (id) => {
//     return await Review.findById(id);
//   });

//   this.reviews = await Promise.all(reviews);
//   console.log(reviews);
//   next();
// });

const User = mongoose.model("User", userSchema);

module.exports = User;
