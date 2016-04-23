var express = require('express');
var router = express.Router();

var ctrlMain = require('../controllers/main');
var ctrlAbout = require('../controllers/about');
var ctrlPress = require('../controllers/press');


/* Home Page */
router.get('/', ctrlMain.index);

/* About Pages */
router.get('/about-us', ctrlAbout.about);
router.get('/about-us/team', ctrlAbout.team);
router.get('/about-us/projects', ctrlAbout.projects);

/* Press Page */
router.get('/press', ctrlPress.press);

module.exports = router;
