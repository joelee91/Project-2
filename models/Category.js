const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Category = new Schema ({
	name: String,
	subcategories: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Subcategory'
		}
	]
})

module.exports = mongoose.model('Category', Category)