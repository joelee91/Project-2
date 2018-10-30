const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Product = new Schema ({
	title: String,
	description: String,
	img: String,
	condition: String,
	quantity: Number,
	price: Number
})

module.exports = mongoose.model('Product', Product)