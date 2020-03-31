var MongoClient = require('mongodb').MongoClient, assert = require('assert');

//connection URL 
var url = 'mongodb://127.0.0.1:27017/mongoproject'

MongoClient.connect(url, function(err, db){
	assert.equal(null, err);
	console.log("connected successfully");
	db.close();
});


