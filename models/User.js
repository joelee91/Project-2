const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const User = new Schema({
	email: {
		type: String,
		required: true
	},
	username: String,
	password: String,
	inventory: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Product'
		}
	]
})

module.exports = mongoose.model('User', User)