const User = require('../models/User')

const usersController = ({
	index: (req, res) => {
		res.render('users/index')
	},
	
})

module.exports = usersController