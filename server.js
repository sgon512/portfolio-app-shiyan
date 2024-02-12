require("dotenv").config({ path: "./.env.development" });

const express = require("express");
const next = require("next");
const connectDB = require("./backend/db");
const bodyParser = require("body-parser");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Define custom routes here
  server.get("/test", (req, res) => {
    res.send({ message: "This is a custom Express route!yyyyy" });
  });

  server.use(bodyParser.json());
  server.use("/api/v1/portfolios", require("./backend/routes/portfolios"));

  // Handle all other routes with Next.js
  server.all("*", (req, res) => {
    return handle(req, res);
  });

  const PORT = process.env.PORT || 3000;

  // Connect to DB and then start the server
  (async function startServer() {
    await connectDB();
    server.listen(PORT, (err) => {
      if (err) throw err;
      console.log(`> Ready on port ${PORT}`);
    });
  })();
});

