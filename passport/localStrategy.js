const User = require('../models/user')
const LocalStrategy = require('passport-local').Strategy

const strategy = new LocalStrategy(
	{
		passReqToCallback: true, 
	},
	function(req, username, password, done) {
		User.findOne({ username: username }, (err, user) => {
			console.log(user);
			if (err) {
				console.log("STEP ERR");
				return done(err)
			}
			if (!user) {
				console.log("STEP NO USER");
				return done(null, false, { message: 'Incorrect username' })
			}
			if (!user.checkPassword(password)) {
				console.log("STEP INVALID");
				return done(null, false, { message: 'Incorrect password' })
			}
			return done(null, user)
		})
	}
)

module.exports = strategy