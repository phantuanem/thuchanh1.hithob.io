const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const Controller = require('./api/controllers//controller')

mongoose.connect('mongodb+srv://tuanem:25032002@cluster0.taiew.mongodb.net/contactbook?retryWrites=true&w=majority')
.then(() => { console.log('Connect to DB') })
.catch((err) => { console.log('Loi: ', err) })

const app = express()

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

Controller(app)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`)
})