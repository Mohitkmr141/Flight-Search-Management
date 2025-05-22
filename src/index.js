require("dotenv").config({
  path: "./.env"
});

const app = require("./app.js");
const connect = require("./repository/city-repository.js")
app.listen(process.env.PORT, () => {
  console.log(`Server is at http://localhost:${process.env.PORT}`);
  connect()
});

    