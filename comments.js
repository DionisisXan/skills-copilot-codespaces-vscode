
// Create web server
var express = require('express');
var app = express();

// Database
var Datastore = require('nedb');
var db = new Datastore({filename: 'comments.db', autoload: true});

// Serve static files
app.use(express.static('public'));

// Parse JSON requests
var bodyParser = require('body-parser');
app.use(bodyParser.json());

// HTTP GET http://localhost:3000/comments
app.get('/comments', function (req, res) {
  db.find({}, function (err, docs) {
    res.json(docs);
  });
});

// HTTP POST http://localhost:3000/comments
app.post('/comments', function (req, res) {
  var comment = {














