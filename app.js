var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors')
var app = express();
var route = require('./routes/index');


//# CORS Scope 
// -- allow all --//
app.use(cors())

    // -- Or only allow specific links --//

    // var whitelist = ['http://localhost:8000', 'http://example2.com']
    // var corsOptions = {
    //   origin: function (origin, callback) {
    //     if (whitelist.indexOf(origin) !== -1) {
    //       callback(null, true)
    //     } else {
    //       callback(new Error('Not allowed by CORS'))
    //     }
    //   }
    // }
    //app.use(cors(corsOptions))
//# CORS Scope 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded(
    { extended: false })
);

app.use('/', route.index);

var hostname = '127.0.0.1';
var port = 4000;
app.listen(port, hostname, function() {
    console.log('Server running at http://'+ hostname + ':' + port);
  });