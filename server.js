require("dotenv").config({ path: "./.env.development" });

const express = require("express");
const next = require("next");
const connectDB = require("./backend/db");
const bodyParser = require("body-parser");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
connectDB();

app.prepare().then(() => {
  const server = express();

  server.get("/test", (req, res) => {
    res.send({ message: "This is a custom Express route!yyyyy" });
  });
  server.use(bodyParser.json());
  server.use("/api/v1/portfolios", require("./backend/routes/portfolios"));
  server.all("*", (req, res) => {
    return handle(req, res);
  });

  const PORT = process.env.PORT || 3000;
  server.listen(PORT, (err) => {
    if (err) {
      console.error(err);
    }
    console.log(`> Ready on port ${PORT}`);
  });
});
