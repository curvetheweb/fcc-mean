/* GET jobs page */
module.exports.jobs = function(req, res) {
  res.render('jobs', {title: 'Jobs'});
};