const sq = require('sequelize');
var db = require('../config');

const Family = db.sq.define('family',{
    id:{
        type: sq.UUIDV4,
        primaryKey: true
    },
    firstname:{
        type: sq.STRING
    },
    lastname:{
        type: sq.STRING
    },
    age:{
        type: sq.INTEGER
    },
})

module.exports = Family;