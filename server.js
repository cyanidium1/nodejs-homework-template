const mongoose = require("mongoose");

const app = require("./app");

const { DB_HOST } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log("DB ok");
    app.listen(3000, () => {
      console.log("Server ok");
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
