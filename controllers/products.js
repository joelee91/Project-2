const Product = require('../models/Product')

const productsController = {
	show: (req, res) => {
		const productId = req.params.productsId
		Product.findById(productId)
		.then(product => {
			res.render('products/show')
		})
	}
}

module.exports = productsController