const Contact = require('../models/contact')
getContact = (res) => {
	Contact.find({},(err, contacts) => {
		res.send(contacts)
	})
}

module.exports = (app) => {
	//Tao mot contact
	app.post('/api/post', (req, res) => {
		console.log('Data.....',req.body)

		Contact.create({
			name: req.body.name,
			email: req.body.email,
			address: req.body.address,
			phone: req.body.phone,
			favorite: String(req.body.favorite).toLowerCase() === 'true'
		}, (err, contact) => {
			if(err){
				res.status(500).send(err)
			}
			else{
				res.send(contact)
			}
		})
	})

	// Lay danh sach
	app.get('/api/all', (req, res) => {
		getContact(res)
	})

	// Cap nhat mot contact
	app.put('/api/update', (req, res) => {
		Contact.updateOne({_id: req.body.id}, {
			name: req.body.name,
			email: req.body.email,
			address: req.body.address,
			phone: req.body.phone,
			favorite: String(req.body.favorite).toLowerCase() === 'true'
		}, (err, contact) => {
			if(err){
				res.status(500).send(err)
			}
			else{
				console.log('Update')
				res.send('update')
			}
		})
	})

	//Xoa mot contact
	app.delete('/delete', (req, res) => {
		Contact.deleteOne({_id: req.query.id}, (err, contact) => {
			if(err){
				res.status(500).send(err)
			}
			else{
				console.log('Delete', req.query.id)
				res.send('delete')
			}
		})
	})

	//Tim kiem theo favorite = true
	app.get('/api/favorite', (req, res) => {
		Contact.find({ favorite: true }, (err, contacts) => {
			if(err){
				res.status(500).send(err)
			}
			else{
				res.send(contacts)
			}
		})
	})

	// Tim kiem theo name
	app.get('/search', (req, res) => {
		Contact.find({ name: req.query.name}, (err, contacts) => {
			if(err){
				res.status(500).send(err)
			}
			else{
				res.send(contacts)
			}
		})
	})

	// Xoa tat ca
	app.delete('/daleteall', (req, res) => {
		Contact.remove((err) => {
			if(err){
				res.status(500).send(err)
			}
			else{
				res.send([])
			}
		})
	})
};