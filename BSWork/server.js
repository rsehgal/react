const express = require('express');
const formidable = require('formidable');
const path = require('path');
const fs = require('fs');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http'); // Import the http module

app.use(bodyParser.json());
app.use(cors());

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

//const uploadDir = path.join(__dirname, 'uploads');
//console.log(uploadDir);

// Ensure the upload directory exists
/*if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}*/

var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "sympnp_sympadmin",
  password: "sympadmin",
  database: "sympnp_sympnp2023"
});
con.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to MySQL');
});

function ProcessQuery(res,query){
  con.query(query, (err, results) => {
    if (err) {
      throw err;
    }
    //console.log(results);
    res.json(results);
  });
}
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


app.get('/api/data/Proceedingss', (req, res) => {
  const query = 'SELECT Title,Status,Filename from proceedings2 where Category="I"'; // Replace with your table name
  con.query(query, (err, results) => {
    if (err) {
      throw err;
    }
    res.json(results);
  });
});
app.post('/api/data/ProceedingsIT', (req, res) => {
  console.log(req.body.category);
  const query = 'SELECT Title,Status,Filename from proceedings2 where Category="' + req.body.category + '"'; // Replace with your table name
  con.query(query, (err, results) => {
    if (err) {
      throw err;
    }
    res.json(results);
  });
});

app.post('/api/data/ProceedingsC', (req, res) => {
  console.log(req.body.category);
  const query = 'SELECT Title,Status,Filename from proceedings2 where Category="' + req.body.category + '" and topic="' + req.body.topic + '"'; // Replace with your table name
  con.query(query, (err, results) => {
    if (err) {
      throw err;
    }
    res.json(results);
  });
});


app.post('/api/data/OrgComm', (req, res) => {
  const query = 'SELECT name,affiliation FROM OrgComm'; // Replace with your table name
  console.log(query);
  ProcessQuery(res,query);
  /*
  ** Below code is taken to ProcessQuery function
  ** This will make the endpoint definition small
  ** and avoid redundant code.
  **
  ** Kept it here for reference
  */
  /*con.query(query, (err, results) => {
    if (err) {
      throw err;
    }
    //console.log(results);
    res.json(results);
  });
  */
});

app.post('/api/data/UserDetails', (req, res) => {
  const { username } = req.body;
  const query = 'SELECT firstname,lastname FROM user_credentials where uname ="'+username+'"'; // Replace with your table name
  console.log(query);
  ProcessQuery(res,query);
});

app.post('/api/data/PaperDetails', (req, res) => {
  const { username } = req.body;
  const query = 'SELECT user_credentials.firstname as firstname,user_credentials.lastname as lastname, contributions.status as status, contributions.title as title from user_credentials join contributions on contributions.uname=user_credentials.uname where user_credentials.uname ="'+username+'"'; 
  console.log(query);
  ProcessQuery(res,query);
  
});

app.post('/api/data/Download', (req, res) => { 
  const { username } = 'rsehgal';
  console.log("RAAMMAANN : "+req.body);
  const query = 'SELECT title,status from contributions';// where uname = ?';// where uname=; // Replace with your table name
  ProcessQuery(res,query);
});

app.post('/api/data/invited', (req, res) => {
  console.log(req.body);
  const query = 'SELECT name,affiliation FROM invited'; // Replace with your table name
  ProcessQuery(res,query);
});

app.post('/api/data/AdvComm', (req, res) => {
  const query = 'SELECT name,affiliation FROM AdvComm'; // Replace with your table name
  console.log(query);
  ProcessQuery(res,query);
});

app.post('/api/saveCredentialsss', (req, res) => {
  const query = 'SELECT name,affiliation FROM AdvComm'; // Replace with your table name
  console.log(query);
  con.query(query, (err, results) => {
    if (err) {
      throw err;
    }
    res.json(results);
  });
});


app.post('/api/upload', (req, res) => {
  console.log(req.headers);
  const form = new formidable.IncomingForm();



  form.parse(req, (err, fields, files) => {


    console.log("Entered PARSE");
    console.log(fields);

    for (const key in fields) {
      console.log(key, " : ", fields[key][0]);
    }
    //console.log(fields["uploadFolder"][0]);
    const uploadDir = path.join(__dirname, fields["uploadFolder"][0]);

    if (err) {
      return res.status(500).json({ error: err.message });
    }

    // `files` contains information about the uploaded file
    const uploadedFile = files.pdfFile;
    //console.log(uploadedFile);
    //console.log(files.pdfFile[0].originalFilename);    
    //console.log(files.pdfFile[0].filepath);    

    console.log(uploadedFile[0].size);
    //Move the file to a desired location (in this case, 'uploads' directory)
    const newFilePath = path.join(uploadDir, uploadedFile[0].originalFilename);
    //const newFilePath = '/tmp/'+uploadedFile[0].originalFilename;
    //console.log(newFilePath);
    //fs.rename(files.pdfFile[0].filepath, newFilePath, (err) => {
    fs.copyFile(files.pdfFile[0].filepath, newFilePath, (copyErr) => {
      if (copyErr) {
        console.log("FILE move error....", err);
        return res.status(500).json({ error: 'Error moving the file' });
      }

      fs.unlink(files.pdfFile[0].filepath, (unlinkErr) => {
        if (unlinkErr) {
          console.error('Error removing original file:', unlinkErr);
          // Handle the error
          return;
        }

        console.log('File moved successfully');
      });

      res.status(200).json({ success: true, path: newFilePath });
    });
  });
});

/*app.post('/api/upload',(req,res)=>{
  console.log("Upload function called..");
 var form = new formidable.IncomingForm();
console.log(form.parse(req,(err,fields,files)=>{
  console.log("hello");
}));
 form.parse(req, function (err, fields, files) {
  console.log("Entered parse....");
      var oldpath = files.filetoupload.filepath;
      var newpath = '/home/rsehgal/react/server/uploads/' + files.filetoupload.originalFilename;
      console.log(oldpath);
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('File uploaded and moved!');
        res.end();
      });
 });
});*/

app.post('/api/UPPload', (req, res) => {
  console.log('Request received');
  const form = new formidable.IncomingForm({
    uploadDir: uploadDir,
    keepExtensions: true,
  });

  form.parse(req, (err, fields, files) => {
    console.log('Inside form.parse callback');
    if (err) {
      console.error('Error parsing form:', err);
      return res.status(500).json({ error: err.message });
    }

    const filePath = files.file.path;
    // Process the uploaded file as needed

    res.status(200).json({ success: true, path: filePath });
  });
});


app.post('/api/uploadddddd', (req, res) => {
  // 'file' is the name attribute in the form input field
  // Access the uploaded file information through req.file

  /* if (!req.file) {
     return res.status(400).send('No file uploaded.');
   }*/

  // Process the uploaded file as needed
  // For example, you might save the file path in a database

  console.log("UPLOAD calledddd...");
  res.status(200).send('File uploaded successfully.');
});

app.post('/api/saveCredentials', (req, res) => {
  console.log(req.headers);
  const form = new formidable.IncomingForm();

  form.parse(req, (err, fields, files) => {


    console.log("Entered PARSE");
    console.log(fields);

    for (const key in fields) {
      console.log(key, " : ", fields[key][0]);
    }

    if (err) {
      return res.status(500).json({ error: err.message });
    }

  });
});

app.post('/api/updateCredentials', (req, res) => {

  console.log(req.headers);
  const form = new formidable.IncomingForm();
  form.parse(req, (err, fields, files) => {

    console.log(fields);

    for (const key in fields) {
      console.log(key, " : ", fields[key][0]);
    }

    const sqlTemplate = 'UPDATE test SET ? where ?';
    const sqlQuery = mysql.format(sqlTemplate, [{ password: fields["password"][0] }, { email: fields["email"][0] }]);


    console.log(sqlQuery);

    con.query(sqlQuery, (err, results) => {
      if (err) {
        throw err;
      }

      console.log("data updated");
      res.json({ message: "Data Updated successfully" });
    });


    if (err) {
      return res.status(500).json({ error: err.message });
    }

  });
});


app.post('/api/saveCCredentials', (req, res) => {
  //const { email,password } = req.body;
  //const { dataToSave } = req.body;
  console.log("HELLOOOOO SAVECREDENTIALSSSS");
  //res.json({ message: "Hello from SaveCredentials." }); 
  const userId = 123;
  const username = 'john_doe';
  console.log(req.body);
  console.log("====================");
  var arr = req.body;
  console.log(arr.email);
  console.log(arr.password);
  var dataToSave = {}
  dataToSave["email"] = arr.email;
  dataToSave["password"] = arr.password;
  //console.log(dataToSave);
  //console.log("Email : "+email);
  //console.log("Passwd : "+password);
  //const dataToSave=[userId,username];;
  //const dataToSave={"email":"sc.ramansehgal@gmail.com","password":"#Gudia123"};
  //const sqlTemplate = 'INSERT INTO test SET ?';
  const sqlTemplate = 'UPDATE test SET ? where uname="rsehgal"';
  const sqlQuery = mysql.format(sqlTemplate, dataToSave);

  console.log(sqlQuery);

  /*con.query(sqlQuery, (err, results) => {
    if (err) {
      throw err;
    }
    
    console.log("data updated");
    res.json({message:"Data Updated successfully"});
  });
  */

});


app.post('/api/login', (req, res) => {

  console.log("Login server called....");
  console.log(req.headers);
  const { email, password } = req.body;
  console.log(email);
  console.log(password);

  con.query("SELECT * FROM user_credentials where email='" + email + "'", function (err, result, fields) {
    if (err) {
      alert("Errorrrr...."); 
      throw err;
    }
    //console.log(result[0].password)
    console.log(result[0].passwd);
    if(password===result[0].passwd)
       res.json({message:"Congratulations Login Successfull",
      email:email,
    uname:result[0].uname});

  });
});



app.post('/api/loginn', (req, res) => {

  console.log("Login server called....");
  console.log(req);
  const { email, password } = req.body;
  console.log(email);
  console.log(password);

  con.query("SELECT * FROM user_credentials where email='" + email + "'", function (err, result, fields) {
    if (err) {
      alert("Errorrrr....");
      throw err;
    }
    console.log(result[0].passwd);
    if (password === result[0].passwd)
      res.json({ message: "Congratulations Login Successfull" });

  });
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

