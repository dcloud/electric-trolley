'use strict';

let express = require('express');
let fs = require('fs');
let config = require('./config');
let app = express();
let doublemap = require('./routes/doublemap');

// Static files
app.use('/dist', express.static(__dirname + '/dist'));
app.use('/lib/systemjs', express.static(__dirname + '/node_modules/systemjs'));
app.use('/lib/angular2', express.static(__dirname + '/node_modules/angular2'));
app.use('/data', express.static(__dirname + '/data'));

// doublemap
app.use('/api/doublemap', doublemap);

app.get('/', function (req, res) {
    let index = fs.createReadStream(__dirname + '/index.html')
    index.pipe(res);
});

let server = app.listen(config.port, function () {
  let host = server.address().address;
  let port = server.address().port;

  console.log('Electric Trolley app listening at http://%s:%s', host, port);
});
