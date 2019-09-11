var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');

var route = require('./routes/index');
var app = express();

app.use('/', route.index);
// app.use('/getFamily', route.getFamilyById);

app.use(bodyParser.json());

app.use(bodyParser.urlencoded(
    { extended: false })
);

app.listen(4000, () => console.log('server run listening on port 4000'));