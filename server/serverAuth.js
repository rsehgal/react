const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http'); // Import the http module

const app = express();

var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "sympnp_sympadmin",
  password: "sympadmin@123",
  database: "sympnp_sympnp2023"
});
con.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to MySQL');
});

app.use(bodyParser.json());
app.use(cors());

app.get("/api", (req, res) => {
  console.log("HELLLO FROM API >>....");
  res.json({ message: "Hello from Api" });
});
app.get("/api/data", (req, res) => {
  //console.log("HELLLO FROM DATA >>....");
  res.json({ message: "Hello from Data." });
  console.log(req);
});

app.get('/api/data/OrgComm', (req, res) => {
  const query = 'SELECT name,affiliation FROM OrgComm'; // Replace with your table name
  con.query(query, (err, results) => {
    if (err) {
      throw err;
    }
    res.json(results);
  });
});

app.get('/api/data/AdvComm', (req, res) => {
  const query = 'SELECT name,affiliation FROM AdvComm'; // Replace with your table name
  console.log(query);
  con.query(query, (err, results) => {
    if (err) {
      throw err;
    }
    res.json(results);
  });
});

app.post('/home',(req,res)=>{
res.json({message:"Default condition landing to home"});
});

app.post('/api/login', (req, res) => {
  
  console.log("Login server called....");
  const { email, password } = req.body;
  console.log(email);
  console.log(password);
  
 /* con.query("SELECT * FROM user_credentials where email='"+email+"'", function (err, result, fields) {
    if (err) {
	alert("Errorrrr....");
throw err;
}
    console.log(result[0].passwd);
    if(password===result[0].passwd)
	res.json({message:"Congratulations Login Successfull"});
    
  });*/
});


app.get('/api/SaveCredentials',(req,res)=>{
  //const { dataToSave } = req.body;
  
  const userId = 123;
  const username = 'john_doe';

  //const dataToSave=[userId,username];;
  const dataToSave={"email":"sc.ramansehgal@gmail.com","password":"#Gudia123"};
  const sqlTemplate = 'INSERT INTO test SET ?';
  const sqlQuery = mysql.format(sqlTemplate, dataToSave);
  console.log(sqlQuery);
});

//const PORT = process.env.PORT || 3000;
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

