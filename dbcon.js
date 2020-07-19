var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'classmysql.engr.oregonstate.edu',
  user            : 'cs340_ryooj',
  password        : '8557',
  database        : 'cs340_ryooj'
});
module.exports.pool = pool;
