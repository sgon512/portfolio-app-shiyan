const { portfolios } = require('./data');
const Portfolio = require('../db/models/portfolio');

class FakeDB {

  async clean() {
    await Portfolio.deleteMany({});
  }

  async addData() {
    await Portfolio.create(portfolios);
  }

  async populate() {
    // 在 fakeDB.populate 方法内
console.log("Populating database...");

    await this.clean();
    await this.addData();
  }
}

module.exports = new FakeDB();