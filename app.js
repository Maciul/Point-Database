require('dotenv').load();
var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

//Connect URL

var url = ('mongodb://localhost:27017/test');

// Use connect to connect to server

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log(db)
  console.log("Connected successfylly to server");

      db.close();
  });
