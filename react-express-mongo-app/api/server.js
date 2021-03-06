const express = require("express");
const app = express();
const connectDb = require("./src/connection");
const User = require("./src/User.model");
const cors = require("cors");

const PORT = 8080;
app.use(cors());

app.get("/users", async (req, res) => {
  const users = await User.find();

  res.json(users);
});

app.get("/user-create", async (req, res) => {
  const user = new User({ username: "userTest", age: 77 });

  await user.save().then(() => console.log("This is the user : " + user));

  res.send("User created \n");
});

app.listen(PORT, function() {
  console.log(`Listening on http://217.160.212.154`);

  connectDb().then(() => {
    console.log("MongoDb connected");
  });
});
