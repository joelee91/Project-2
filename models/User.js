const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const User = new Schema({
	name: String,
	location: String,
	age: Number,
	Gender: String,
	friends: [
		{
			type: Schema.Types.ObjectId,
			ref: 'friend'
		}
	]
})

module.exports = mongoose.model('User', User)