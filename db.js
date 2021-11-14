const mongoose = require("mongoose");
require('dotenv').config();

module.exports = async () => {
  try {
    await mongoose.connect(process.env.DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB Connected")
  } catch (error) {
      console.log("DB not Connected")
  }
};
