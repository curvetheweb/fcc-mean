var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

//mailer to export
var app = require('express')(),
    mailer = require('express-mailer');
var path = require('path');

// view engine setup
app.set('views', path.join(__dirname, '..', 'views'));
app.set('view engine', 'jade');
 
mailer.extend(app, {
  from: 'no-reply@freshcoastcapital.com',
  host: 'smtp.gmail.com', // hostname 
  secureConnection: true, // use SSL 
  port: 465, // port for secure SMTP 
  transportMethod: 'SMTP', // default is SMTP. Accepts anything that nodemailer accepts 
  auth: {
    user: 'nioarchaine@gmail.com',
    pass: 'efaaylrnurodcqwn'
  }
});


/* POST generic contact form */
module.exports.contactForm = [function(req, res, next) {
	var oContact = {ContactName: req.body.contactName,
								  Organization: req.body.contactOrgName,
								  Email: req.body.contactEmail,
									Comments: req.body.contactComments
								 }
	
	var insertDocuments = function(db, callback) {
		var collection = db.collection('WebLeads');
		
		collection.insert(oContact, function(err, result) {
			assert.equal(err, null);
			console.log("Inserted One new contact into the document collection");
			callback(result);
		});
	}
	
	// Connection URL 
	var url = 'mongodb://localhost:27017/FreshCoast';
	// Use connect method to connect to the Server 
	MongoClient.connect(url, function(err, db) {
		assert.equal(null, err);
		console.log("Connected correctly to server");

		insertDocuments(db, function() {
			db.close();
			return next();
		});
	});
}, function(req, res, next) {
	var now = new Date().toISOString();
	app.mailer.send('email', {
    to: 'twilliams@curvetheweb.com', // REQUIRED. This can be a comma delimited string just like a normal email to field.  
    subject: 'New Lead Generated at ' + now, // REQUIRED. 
    ContactName: req.body.contactName,
		Organization: req.body.contactOrgName,
		Email: req.body.contactEmail,
		Comments: req.body.contactComments
  }, function (err) {
    if (err) {
      // handle error 
      console.log(err);
      res.send('There was an error sending the email');
      return;
    }
    res.redirect('/contact/thank-you');
  });
}];





