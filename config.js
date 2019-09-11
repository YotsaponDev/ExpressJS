var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'remotemysql.com',
  user     : 'tTSinsLGCB',
  password : '7HrlWnoqew',
  database : 'tTSinsLGCB'
});
 
connection.connect();
 
// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });
 
// connection.end();

module.exports = connection;