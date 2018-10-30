const Subcategory = require('../models/Subcategory')

const subcategorysController = {
	show: (req, res) => {
		const subcategoryId = req.params.subcateorysId
		Subcategory.findById(subcategoryId)
		.then(subcategory => {
			res.render('subcategorys/show', { subcategory: subcategory })
		})
	}
}

module.exports = subcategorysController