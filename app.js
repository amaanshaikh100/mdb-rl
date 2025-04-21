const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Product = require("./models/productSchema");
const productRoutes = require("./routes/productRoutes");
const carRoutes = require("./routes/carRoutes");
const carReviewRoutes = require("./routes/carReviews");
const userRoutes = require("./routes/userRoutes");
const reviewRoutes = require("./routes/reviewRoutes");

const app = express();

// .env
dotenv.config({ path: "./config.env" });

// DB
const DB = process.env.DB_DRIVER_URL.replace(
  "<db_password>",
  process.env.DB_PASSWORD
);

mongoose
  .connect(DB)
  .then(() => console.log("CONNECTED TO DB..."))
  .catch((err) => console.log(err, err.message));

// DEV Tool
app.use(morgan("dev"));
app.use(express.json());

// API
app.use("/api/v1/car", carRoutes);
app.use("/api/v1/car-review", carReviewRoutes);

app.use("/api/v1/product", productRoutes);
app.use("/api/v1/review", reviewRoutes);
app.use("/api/v1/user", userRoutes);

// SERVER
app.listen(3000, (req, res) => {
  console.log("LISTENING ON PORT 3000...");
});
