'use strict';

let express = require('express');
let fs = require('fs');
let config = require('./config');
let app = express();
let doublemap = require('./routes/doublemap');

const browser_modules = ['systemjs', 'angular2', 'turf'];

// Static files
app.use('/dist', express.static(__dirname + '/dist'));
for (let mod of browser_modules) {
    app.use(`/lib/${mod}`, express.static(__dirname + `/node_modules/${mod}`));
}
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
