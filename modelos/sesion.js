'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SesionSchema = Schema({
	numPartidas: Number,
	numColumnas: Number,
	numFilas: Number,
	condGanar: Number,
	estado: String,
	idJugador1: String,
	idJugador2: String,
	listPartidas: [String]
	
})

module.exports = mongoose.model('Sesion', SesionSchema)
