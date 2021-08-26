let mysql = require("mysql");
let connention = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_express_api",
});

connention.connect(function (error) {
  if (!!error) {
    console.log(error);
  } else {
    console.log("Koneksi Berhasil!");
  }
});

module.exports = connention;
