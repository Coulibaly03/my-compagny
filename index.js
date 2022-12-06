
var express = require("express");
const port = 2000;
const app = express();

const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'sejen',
  password: '50l4BH6tAnDqOj1o',
  database: 'my-compagny'
})

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected")
});

/*my-compagny.connect("my-compagny://localhost/my-compagny", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
var db = my-compagny.connection;*/
var db = connection.connect
app.use(express.json()); 
   
// For serving static HTML files
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
   
app.get("/", (req, res) => {
  res.set({
    "Allow-access-Allow-Origin": "*",
  }); 
     
  // res.send("Hello World");
  return res.redirect("index.html");
});
   
app.post("/formFillUp", (req, res) => {
  var nom = req.body.nom;
  var prenom = req.body.prenom;
  var date_N = req.body.date_N;
  var telephone = req.body.telephone;
  var email = req.body.email;
  var fonction = req.body.fonction;
  var adresse = req.body.adresse;
  var data = {
    NOM: nom,
    PRENOM:prenom,
    DATE_NAISSANCE: date_N,
    TELEPHONE: telephone,
    EMAIL: email,
    FONCTION: fonction,
    ADRESSE: adresse,
  }
});
   
/*db.collection("users").insertOne(
  data, (err, collection) => {
    if (err) {
      throw err;
    }
    console.log("Data inserted successfully!");
  });
   
  return res.redirect("formSubmitted.html");
});*/
   
app.listen(port, () => {
  console.log(`The application started 
  successfully on port ${port}`);
});