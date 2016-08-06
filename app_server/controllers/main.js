/* GET home page */
module.exports.index = function (req, res) {
	
	var twitter = require('twitter');
	var twitterText = require('twitter-text');

	var twitterClient = new twitter({
	  consumer_key: '4hXf3mFnEoIcSW50gxnkGi9mX',
	  consumer_secret: 'sts8ntmXaqSoc42vslPyLO0Exr0TINu35xN7tjtOTQfU42tTTj',
	  access_token_key: '2461606823-KkPA3Xa6PxVKPENXOJx0EpvYLdZUZ15wfQlxZ8e',
	  access_token_secret: 'eujEwY3gn2HxPHJQX02KCi4vAdHFPWPp6v5eNOjF4eTsh'
	});
	
	twitterClient.get('statuses/user_timeline', {screen_name: 'freshcoastcap', count: 3, 'include_rts': true, 'exclude_replies': true}, function(error, tweets, response) {

	    for(var key in tweets) {
	    	if (tweets.hasOwnProperty(key)) {
			    var tweet = tweets[key];
			    tweets[key].htmltext = twitterText.autoLink(tweets[key].text);
			}
	    }
	    
	    res.render('index', {title: 'Home', current_tweets: tweets});
	    
	});

}