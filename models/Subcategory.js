const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Subcategory = new Schema ({
	name: String,
	products: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Product'
		}
	]
})

module.exports = mongoose.model('Subcategory', Subcategory)