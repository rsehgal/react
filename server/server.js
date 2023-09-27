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
//app.use(bodyParser(){limit:5000kb})
//http.globalAgent.maxHeaderCount = 12800000; // Set your desired limit
//http.globalAgent.maxHeaderSize = 16384000;
// Simple API endpoint
/*app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});
*/
app.get("/api", (req, res) => {
  console.log("HELLLO FROM API >>....");
  res.json({ message: "Hello from Api" });
});
app.get("/api/data", (req, res) => {
  //console.log("HELLLO FROM DATA >>....");
  res.json({ message: "Hello from Data." });
  console.log(req);
});

/*function GetData(tablename){
con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM "+tablename, function (err, result, fields) {
    if (err) throw err;
    //console.log(result);
    //res.json({data:result});
    return result;
  });
});
}*/

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

/*app.get("/api/data/OrgComm",(req,res)=>{ 

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM OrgComm", function (err, result, fields) {
    if (err) throw err;
    //console.log(result);
    //return res.json({data:result});
  });
});

});*/
 
   

//const PORT = process.env.PORT || 3000;
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

