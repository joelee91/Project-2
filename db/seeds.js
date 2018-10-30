const Category = require('../models/Category.js')
const Product = require('../models/Product.js')
const Subcategory = require('../models/Subcategory.js')
const User = require('../models/User.js')
const mongoose = require('./connections')

const joe = new User({
	email: "asdf",
	username: "adsf",
	password: "adsf",
	inventory: [menShirts]
})

const menShirts = new Product({
	title: "asdf",
	description: "asdf",
	img: "asdf",
	condition: "asdf",
	quantity: 1,
	price: 1
})
const menPants = new Product({
	title: "asdf",
	description: "asdf",
	img: "asdf",
	condition: "asdf",
	quantity: 1,
	price: 1
})
const womenShirts = new Product({
	title: "asdf",
	description: "asdf",
	img: "asdf",
	condition: "asdf",
	quantity: 1,
	price: 1
})
const womenPants = new Product({
	title: "asdf",
	description: "asdf",
	img: "asdf",
	condition: "asdf",
	quantity: 1,
	price: 1
})
const spiderman = new Product({
	title: "asdf",
	description: "asdf",
	img: "asdf",
	condition: "asdf",
	quantity: 1,
	price: 1
})
const batman = new Product({
	title: "asdf",
	description: "asdf",
	img: "asdf",
	condition: "asdf",
	quantity: 1,
	price: 1
})
const samsung = new Product({
	title: "asdf",
	description: "asdf",
	img: "asdf",
	condition: "asdf",
	quantity: 1,
	price: 1
})
const vizio = new Product({
	title: "asdf",
	description: "asdf",
	img: "asdf",
	condition: "asdf",
	quantity: 1,
	price: 1
})

const men = new Subcategory({
	name: "men",
	products: [menShirts, menPants]
})
const women = new Subcategory({
	name: "women",
	products: [womenShirts, womenPants]
})
const games = new Subcategory({
	name: "games",
	products: [spiderman, batman]
})
const tv = new Subcategory({
	name: "tv",
	products: [samsung, vizio]
})

const technology = new Category({
	name: "technology",
	subcategories: [tv, games]
})
const fashion = new Category({
	name: "fashion",
	subcategories: [women, men]
})

Category.remove({})
	.then(() => Subcategory.insertMany([men, women, games, tv]))
	.then(() => technology.save())
	.then(() => fashion.save())
	.then(() => console.log("Category seeded"))
Subcategory.remove({})
	.then(() => Product.insertMany([menshirts, menPants, womenShirts, womenPants, samsung, vizio, spiderman, batman]))
	.then(() => men.save())
	.then(() => women.save())
	.then(() => games.save())
	.then(() => tv.save())
	.then(() => console.log("Subcategory seeded"))
User.remove({})
	.then(() => Product.insertMany([menShirts]))
	.then(() => mongoose.connection.close())