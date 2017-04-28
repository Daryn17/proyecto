'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UsuarioSchema = Schema({
	nombre: String,
	foto: String,
	correo: String,
	clave: String,
	numPartidas: Number,
	puntuacion: Number,
	listGanadas: [],
	id: Number
})

module.exports = mongoose.model('Product', UsuarioSchema)


