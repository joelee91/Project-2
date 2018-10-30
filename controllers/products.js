const Product = require('../models/Product')

const productsController = {
	index: (req, res) => {
		Product.find({}).then((products) => {
			res.render('products/index', { products: products })
		})
	},
	new: (req, res) => {
		res.render('products/new')
	},
	show: (req, res) => {
		const productId = req.params.productsId
		Product.findById(productId)
		.then(product => {
			res.render('products/show')
		})
	},
	create: (req, res) => {
		Product.create(req.body).then((newProduct) => {
			res.redirect(`/${newProduct._id}`)
		})
	},
	edit: (req, res) => {
		Product.findById(req.params.id).then(products => {
			res.render('products/edit', { products: products })
		})
	},
	update: (req, res) => {
		Product.findByIdAndUpdate(req.params.Id, req.body).then((updatedProducts) => {
			res.redirect(`/${updatedProducts._id}`)
		})
	}
}

module.exports = productsController