const Sequelize = require('sequelize');
var mysql = require('mysql2');

const sq = new Sequelize('tTSinsLGCB', 'tTSinsLGCB', '7HrlWnoqew', {
  host: 'remotemysql.com',
  dialect: 'mysql',
  define: {
    timestamps: false, // Default จะ where createdAt, updatedAt ให้อัตโนมัติ
    freezeTableName: true // Default จะเปลี่ยนชื่อ table เช่น family => families, user => users
  }
})


var db = mysql.createConnection({
  host     : 'remotemysql.com',
  user     : 'tTSinsLGCB',
  password : '7HrlWnoqew',
  database : 'tTSinsLGCB'
});
 
db.connect();

module.exports = {sq, db};