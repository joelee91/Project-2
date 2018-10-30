const Category = require('../models/Category')

const categorysController = ({
	index: (req, res) => {
		res.render('categorys/index')
	}
})

module.exports = categorysController