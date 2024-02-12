const express = require("express");
const router = express.Router();
const { checkJwt } = require("../controllers/auth");
const {
  getPortfolios,
  getPortfolioById,
  createPortfolio,
  updatePortfolio,
  deletePortfolio,
} = require("../controllers/portfolios");
router.get("", getPortfolios);
router.get("/:id", getPortfolioById);
router.post("", createPortfolio);
router.patch("/:id", updatePortfolio);
router.delete("/:id", deletePortfolio);
module.exports = router;
