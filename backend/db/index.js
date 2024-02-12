const mongoose = require("mongoose");
require("dotenv").config({ path: "./.env.development" });
require("./models/portfolio");
async function connectDB() {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("Successfully connected to MongoDB using Mongoose!");
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1);
  }
}

module.exports = connectDB;
