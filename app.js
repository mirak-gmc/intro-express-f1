const express = require("express");

const app = express();

let users = [
  {
    name: "John Doe",
    email: "john@gmail.com",
    id: 0,
  },
  {
    name: "Jane Doe",
    email: "Jane@gmail.com",
    id: 1,
  },
];
// converts all to json
app.use(express.json());

// get all users
app.get("/users", (req, res) => {
  res.send(users);
});

//add a new user
app.post("/add_user", (req, res) => {
  const newUser = req.body;
  newUser.id = Date.now();
  users.push(newUser);
  res.send({
    newUser,
    users,
  });
});

//edit user by ID
app.put("/users/:userId", (req, res) => {
  const id = req.params.userId;
  if (!users.find((user) => user.id.toString() === id)) {
    return res.status(404).send({ msg: "NOT FOUND " });
  }

  const newInfo = req.body; // {...user ,  name :"Karim"}
  users = users.map((user) =>
    user.id.toString() === id ? { ...user, ...newInfo } : user
  );
  res.send(users);
});

//remove user by id
app.delete("/users/:userId", (req, res) => {
  const id = req.params.userId;
  if (!users.find((user) => user.id.toString() === id)) {
    return res.status(404).send({ msg: "NOT FOUND " });
  }
  users = users.filter((user) => user.id.toString() !== id);
  res.send(users);
});

// Start The Server
const port = 5000;
app.listen(port, () => {
  console.log(`The Server is running on port ${port}`);
});
