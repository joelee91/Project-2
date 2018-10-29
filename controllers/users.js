const User = require('../models/User')

const usersController = ({
	index: (req, res) => {
		User.find({}).then((users) => {
			res.send(users)
			res.render('users/index', { users: users })
		})
	},
	new: (req, res) => {
		res.send('hello from user new')
	}
})

module.exports = usersController