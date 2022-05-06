const express = require("express");
const { accessControl } = require("./middleware");
const routers = require("./routers");
const dotenv = require("dotenv");


const app = express();

dotenv.config({
  path : "./config/env/config.env"
});

app.use(express.json());

/// Routers
app.use("",routers);

// app.use(accessControl); /// Altındaki bütün requestler için çalışıyor
app.listen(process.env.PORT, () => {
  console.log("Server Started!");
});
