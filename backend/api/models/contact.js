const mongoose = require('mongoose')

const Schema = mongoose.Schema

var contactSchema = new Schema({
	name: {
		type: String,
		required: [true, "Contact name is required"]
	},
	email: {
		type: String,
		trim: true,
		lowercase: true,
	},
	address: String,
	phone: String,
	favorite: Boolean
})

contact = mongoose.model('contact',contactSchema)

module.exports = contact;
