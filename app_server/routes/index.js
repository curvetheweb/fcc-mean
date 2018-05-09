var express = require('express');
var router = express.Router();

var ctrlMain = require('../controllers/main');
var ctrlSolutions = require('../controllers/solutions');
var ctrlForms = require('../controllers/forms');

/* Home Page */
router.get('/', ctrlMain.index);

/* Solutions Page */
router.get('/solutions', ctrlSolutions.solutions);

/* Form Handling */
router.post('/contact', ctrlForms.contactForm);
router.get('/contact/thank-you', ctrlForms.formThankYou);

module.exports = router;
