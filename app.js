var insertDocuments = function(db, callback) {
  var collection = db.collection('docs');
  collection.insertMany([
    {a : 1}, {a : 2}, {a : 3}
  ], function(err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents into the collection");
    callback(result);
  });
};

var findDocuments = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('docs');
  // Find some documents
  collection.find({'AIN Holdings Inc: {data':'country'}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs)
    callback(docs);
  });
};

var updateDocument = function(db, callback) {
  var collection = db.collection('documents');
  collection.updateOne({ a : 1 }
   , { $set: { b : 1 } }, function(err, result) {
    assert.equal(err, null);
    assert.equal(1, result.result.n);
    console.log("Update the document with the field a equal to 2");
    callback(result);
  });
};

var removeDocument = function(db, callback) {
  var collection = db.collection('documents');

  collection.deleteOne({ a : 3}, function(err, result) {
    assert.equal(err, null);
    assert.equal(1, result.result.n);
    console.log("Removed the document with the field a equal to 3");
    callback(result);
  });
};

var indexCollection = function(db, callback) {
  db.collection('documents').createIndex(
    { 'a' : 1},
    null,
    function(err, results) {
      console.log(results);
      callback();
    }
  );
};

var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

//Connect URL

var url = 'mongodb://localhost:27017/test';

// Use connect to connect to server

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected successfylly to server");

  // insertDocuments(db, function() {
    // updateDocument(db, function() {
    //   // removeDocument(db, function() {
        findDocuments(db, function() {
          // indexCollection(db, function() {
      db.close();
    // });
    // });
  });
});
