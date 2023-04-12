const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const dbConfig = () => {
  try {
    mongoose.connect(process.env.MONGODB_URL);
    console.log("database connected");
  } catch (error) {
    console.log("connection failed", +error);
  }
};

module.exports = dbConfig;
