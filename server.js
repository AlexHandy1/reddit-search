var express = require('express')
var bodyParser = require('body-parser')

var app = express();
var path = require('path');

var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/reddit');


// CONFIG
app.use(express.static(__dirname + '/public'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('port', process.env.PORT || 3000);

// ROUTES

//DATABASE INSERTION
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/searchtermsdb', function(req, res) {
 console.log(req.query)
  var searchterm = req.query.searchterm;
  console.log(searchterm);

  var collection = db.get('reddit')

  collection.insert(
    {"searchterm" : searchterm},
    function(err, doc) {
      if(err) {
        console.log('error');
        res.send("There was a problem adding the information to the database.");
      } else {
        res.redirect('/');
      }
    });
})

//API ENDPOINT
app.get('/searchterm', function(req, res) {
  res.json({});
})

app.post('/searchterm', function(req, res) {
  // console.log(req.body)
  // res.send(req.body.test)
})

// PORT INITIALISATION

app.listen(app.get('port'), function() {
  console.log('Listening on:', app.get('port'));
});

module.exports = app;