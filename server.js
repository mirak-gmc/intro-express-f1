const express = require("express");

const app = express();

function logger(req, res, next) {
  console.log(req.method, " at ", req.url);
  next();
}
// global middleware
app.use(logger);
app.use("/static", express.static(__dirname + "/Public"));

// app.get("/style.css", (req, res) => {
//   res.sendFile(__dirname + "/Public/style.css");
// });

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/Public/index.html");
// });

// app.get("/products", (req, res) => {
//   res.sendFile(__dirname + "/Public/products.html");
// });

// Start The Server
const port = 5000;
app.listen(port, () => {
  console.log(`The Server is running on port ${port}`);
});
