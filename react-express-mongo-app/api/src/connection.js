const mongoose = require("mongoose");

const User = require("./User.model");

/* const connection = "mongodb://mongo:27017/mongo-test"; */
const connection = "mongodb://217.160.212.154:27017/my_db";

const connectDb = () => {
  return mongoose.connect(connection);
};

module.exports = connectDb;
