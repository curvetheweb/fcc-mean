/* GET about us page */
module.exports.about = function(req, res) {
  res.render('about-us', {title: 'About Us'});
};

/* GET team page */
module.exports.team = function(req, res) {
  res.render('team', {title: 'Team'});
};

/* GET projects page */
module.exports.projects = function(req, res) {
  res.render('projects', {title: 'Projects'});
};