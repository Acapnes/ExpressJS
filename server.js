const express = require("express");
const { accessControl } = require("./middleware");

const app = express();

const PORT = 5000;

app.use(express.json());

const users = [
  { id: 1, name: "Alper", password: "123" },
  { id: 2, name: "Omer", password: "321" },
];

app.post("/users", (req, res, next) => {
  users.push(req.body);
  res.json({
    success: true,
    data: users,
    response: "New user created",
  });
});

app.delete("/users", (req, res, next) => {
  res.json({
    success: true,
    comment: "Delete Request",
  });
});

app.put("/users/:id", (req, res, next) => {
  const id = parseInt(req.params.id);
  for (let i = 0; i < users.length; i++) {
    if (users[i].id === id) {
      users[i] = {
        ...users[i],
        ...req.body,
      };
    }
  }
  res.json({
    success: true,
    data: users,
    comment: "Put Request",
  });
});

app.get("/products", accessControl, (req, res, next) => {
  /// sadece belirttiğimiz request için çalışıyor.
  res.send("Products");
});

app.get("/users", (req, res, next) => {
  res.json(users);
});

app.use(accessControl); /// Altındaki bütün requestler için çalışıyor

app.listen(PORT, () => {
  console.log("Server Started!");
});
