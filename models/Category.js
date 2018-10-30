const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Category = new Schema ({
	name: String
})

module.exports = mongoose.model('Category', Category)