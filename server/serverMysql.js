/*var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
  console.log("HELLOOOO ");
}).listen(3000); 
*/
var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "sympnp_sympadmin",
  password: "sympadmin@123",
  database: "sympnp_sympnp2023"
});

/*con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});*/

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM menuitems", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
