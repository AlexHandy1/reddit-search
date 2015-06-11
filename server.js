var express = require('express')
var bodyParser = require('body-parser')
// var WORKERS = process.env.WEB_CONCURRENCY || 1;

// throng(start, {
//   workers: WORKERS,
//   lifetime: Infinity
// });

var app = express();
var path = require('path');

// CONFIG
app.use(express.static(__dirname + '/public'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('port', process.env.PORT || 3000);

// ROUTES

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});


// PORT INITIALISATION

app.listen(app.get('port'), function() {
  console.log('Listening on:', app.get('port'));
});

module.exports = app;