const expres = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");
const app = expres();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(expres.json());
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "pass",
  database: "crud",
});
app.listen(3001, () => {
  console.log("its running on 3001");
});
app.post("/api/insert", (req, res) => {
  const movieName = req.body.movieName;
  const movieReview = req.body.movieReview;

  const sqlInsert = "INSERT INTO movie (movieName,movieReview) VALUES (?,?)";
  db.query(sqlInsert, [movieName, movieReview], (err, result) => {
    console.log(result);
  });
});
app.get("/api/get", (req, res) => {
  const sqlselect = "SELECT * FROM movie;";
  db.query(sqlselect, (err, result) => {
    res.send(result);
  });
});
