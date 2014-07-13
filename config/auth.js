// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

	'facebookAuth' : {
		'clientID' 		: '124346424420251', // your App ID
		'clientSecret' 	: '87216de18d0c9523dd4f61a8caa7e95f', // your App Secret
		'callbackURL' 	: 'http://localhost:3000/auth/facebook/callback'
	},

	'twitterAuth' : {
		'consumerKey' 		: 'your-consumer-key-here',
		'consumerSecret' 	: 'your-client-secret-here',
		'callbackURL' 		: 'http://localhost:3000/auth/twitter/callback'
	},

	'googleAuth' : {
		'clientID' 		: '986436769027-urk8u8mhb29diihi027su990qi4hr11e.apps.googleusercontent.com',
		'clientSecret' 	: 'JQ-0KMnQuJTko8L0U7IdVFOz',
		'callbackURL' 	: 'http://localhost:3000/auth/google/callback'
	}

};