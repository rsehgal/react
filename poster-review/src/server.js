// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;
app.use(cors());

app.use(express.json());

var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "sympnp_sympadmin",
  password: "sympadmin",
  database: "sympnp_sympnp2024"
});


con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.get('/api/getReviewerName', (req, res) => {
  //const { selectedValue } = req.body;
  const selectedValue  = req.query.refereeName;
  
  
const sqlQuery = 'SELECT refereeName FROM posterReviewerList WHERE uname = ?';

  con.query(sqlQuery, [selectedValue], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).send('Database query failed');
    }

    // Send the results back as JSON
    res.json(results);
});
});

app.get('/api/update', (req, res) => {
  //const { selectedValue } = req.body;
  const selectedValue  = req.query.refereeName;
  
  // Perform the database update logic here
  console.log(`Updating database with value: ${selectedValue}`);

const sqlQuery = 'SELECT * FROM posterReviewerAllotment WHERE refereeName = ?';

  con.query(sqlQuery, [selectedValue], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).send('Database query failed');
    }

    // Send the results back as JSON
    res.json(results);
});
});

app.get('/api/updateMarks', (req, res) => {

  
  console.log("Update Marks called.....");
  //console.log(req.body);
  //res.json("Hello from UpdateMarks");
  //const { selectedValue } = req.body;
  //console.log(selectedValue);
  const marks  = req.query.marks;
  const paper = req.query.paper;
  const refereeName = req.query.refereeName;

  console.log('marks:', marks);


//  const marksInt = parseInt(marks,10);

  const marksInt = parseInt(marks, 10);// || 100;


  console.log(marksInt);

  console.log(`Updating database with value: ${marks} and paper : ${paper}`);

  const sqlQuery = 'update posterReviewerAllotment set marks = ? where Filename = ? and refereeName = ? ';

  con.query(sqlQuery, [marksInt,paper,refereeName], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).send('Database query failed');
    }

    // Send the results back as JSON
    res.json(results);
    
});

  /*
  const selectedValue  = req.query.refereeName;
  
  // Perform the database update logic here
  console.log(`Updating database with value: ${selectedValue}`);

const sqlQuery = 'SELECT * FROM posterReviewerAllotment WHERE refereeName = ?';

  con.query(sqlQuery, [selectedValue], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).send('Database query failed');
    }

    // Send the results back as JSON
    res.json(results);
    
});
*/
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

