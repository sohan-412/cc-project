const express = require("express");
const path = require("path");
const port = process.env.PORT || 3001;

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true}));

app.use(express.static(path.resolve(__dirname, "./Pages/")));
app.use("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./Pages/", "index.html"));
});
app.listen(port, () => {
  console.log("Server is ready to listening....",port);
});
