const mongoose = require("mongoose");
require("dotenv").config({ path: "./.env.development" });
const fakeDB = require("./FakeDB");

async function connectDB() {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("> Starting populating DB...");
    await fakeDB.populate();
    console.log("> DB has been populated...");
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
  } finally {
    await mongoose.connection.close();
  }
}

connectDB();

