const User = require('../models/User')

const usersController = {
	index: (req, res) => {
		User.find({}).then((users) => {
			res.render('users/index', { users: users})
		})
	}
}

module.exports = usersController