const mongoose = require("mongoose");
const Portfolio = mongoose.model("Portfolio");

exports.getPortfolios = async (req, res) => {
  const portfolios = await Portfolio.find({});
  return res.json(portfolios);
};
exports.getPortfolioById = async (req, res) => {
  try {
    const portfolio = await Portfolio.findById(req.params.id);
    return res.json(portfolio);
  } catch (error) {
    return res.status(422).send(error.message);
  }
};
exports.createPortfolio = async (req, res) => {
  const portfolioData = req.body;

  const userId = process.env.USER_ID;
  const portfolio = new Portfolio(portfolioData);
  portfolio.userId = userId;

  try {
    const newPortfolio = await portfolio.save();
    return res.json(newPortfolio);
  } catch (error) {
    return res.status(422).send(error.message);
  }
};
exports.updatePortfolio = async (req, res) => {
  const {
    body,
    params: { id },
  } = req;

  try {
    const updatedPortfolio = await Portfolio.findOneAndUpdate(
      { _id: id },
      body,
      { new: true, runValidators: true }
    );
    return res.json(updatedPortfolio);
  } catch (error) {
    return res.status(422).send(error.message);
  }
};
exports.deletePortfolio = async (req, res) => {
  try {
    const { id } = req.params;
    // 使用 findOneAndDelete 替换 findOneAndRemove
    const portfolio = await Portfolio.findOneAndDelete({ _id: id });
    if (!portfolio) {
      return res.status(404).json({ error: "Portfolio not found" });
    }
    res.status(200).json({ id });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
