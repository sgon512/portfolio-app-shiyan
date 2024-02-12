const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const portfolioSchema = new Schema({
  title: { type: String, required: true, maxlength: 128 },
  company: { type: String, maxlength: 64 },
  companyWebsite: { type: String, maxlength: 128 },
  location: { type: String },
  jobTitle: { type: String },
  description: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date },
  createdAt: { type: Date, default: Date.now },
  userId: { type: String, required: true },
});

module.exports = mongoose.model("Portfolio", portfolioSchema);
