'use strict'


const mongoose = require('mongoose')
const app = require('./app')
const port = process.env.PORT || 9000


mongoose.connect('mongodb://localhost:27017/cuatro', (err, res) =>{
	if(err){
		
		return console.log(`Error al conectar a la BD: ${err}`)
	}
	console.log('Conexión a la BD')

	app.listen(port, () => {
		console.log(`Hola mundo!!${port}`)
	})
})
