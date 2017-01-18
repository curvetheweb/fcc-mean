/* GET home page */
module.exports.index = function (req, res) {
	
	var Twitter = require('twitter');
	var twittertext = require('twitter-text');

	var twitterClient = new Twitter({
	  consumer_key: '4hXf3mFnEoIcSW50gxnkGi9mX',
	  consumer_secret: 'sts8ntmXaqSoc42vslPyLO0Exr0TINu35xN7tjtOTQfU42tTTj',
	  access_token_key: '2461606823-KkPA3Xa6PxVKPENXOJx0EpvYLdZUZ15wfQlxZ8e',
	  access_token_secret: 'eujEwY3gn2HxPHJQX02KCi4vAdHFPWPp6v5eNOjF4eTsh'
	});
	
	
	
	
//	var receivedTweets = twitterClient.get('statuses/user_timeline', {screen_name: 'freshcoastcap', count: 3, 'include_rts': true, 'exclude_replies': true}, function(error, tweets, response) {
//		var aTweets = new Array();
//		
//		try {
//			tweets.forEach(function(tweet, index, arr){
//				if(tweet.hasOwnProperty('retweeted_status')) {
//					aTweets[index] = twittertext.autoLink('RT @' + tweet.retweeted_status.user.screen_name + ': ' + tweet.retweeted_status.text);
//				} else {	
//					aTweets[index] = twittertext.autoLink(tweet.text);
//				}
//			});
//		}
//		catch (e) {
//		   // statements to handle any exceptions
//		   console.log(e); // pass exception object to error handler
//		}
//		
//		
//	    res.render('index', {title: 'Home', current_tweets: aTweets});
//	});

}