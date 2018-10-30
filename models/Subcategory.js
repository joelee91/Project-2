const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Subcategory = new Schema ({
	name: String
})

module.exports = mongoose.model('Subcategory', Subcategory)