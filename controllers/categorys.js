const Category = require('../models/Category')

const categorysController = ({
	index: (req, res) => {
		Category.find({}).then((categorys) => {
			res.render('categorys/index', { categorys: categorys})
		})
	},
	show: (req, res) => {
		const categoryId = req.params.categorysId
		
	}
})

module.exports = categorysController