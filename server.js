const express = require("express");
const { accessControl } = require("./middleware");

const app = express();

const PORT = 5000;

const users = [
  { id: 1, name: "Alper", password: "123" },
  { id: 2, name: "Omer", password: "321" },
];

app.get("/products", accessControl, (req, res, next) => { /// sadece belirttiğimiz request için çalışıyor.
  res.send("Products");
});

app.use(accessControl); /// Altındaki bütün requestler için çalışıyor
app.get("/users", (req, res, next) => {
  res.json(users);
});

app.listen(PORT, () => {
  console.log("Server Started!");
});
