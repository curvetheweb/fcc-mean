var express = require('express');
var router = express.Router();

var ctrlMain = require('../controllers/main');
var ctrlAbout = require('../controllers/about');
var ctrlPress = require('../controllers/press');
var ctrlForms = require('../controllers/forms');
var ctrlJobs = require('../controllers/jobs')

/* Home Page */
router.get('/', ctrlMain.index);

/* About Pages */
router.get('/about-us', ctrlAbout.about);
router.get('/about-us/team', ctrlAbout.team);
router.get('/about-us/projects', ctrlAbout.projects);

/* Press Page */
router.get('/press', ctrlPress.press);

/* Form Handling */
router.post('/contact', ctrlForms.contactForm);
router.get('/contact/thank-you', ctrlForms.formThankYou);

/* Hidden */
router.get('/jobs', ctrlJobs.jobs);

module.exports = router;
