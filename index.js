// initialization
const express = require("express");
const app = express();
const port = 7304;
const dpiRouter = require("./controller/dpi.js");

// import body parser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Halo Sayang ❤️");
});

app.use("/api/dpi", dpiRouter);

app.listen(port, () => {
  console.log(`Aplikasi sedang berjalan pada port: ${port}`);
});
