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
	listPartidas: [String],
	backGroundColor: String,
	colorJugador1: String,
	colorJugador2: String,
	juegoActual: Number 
	
})

module.exports = mongoose.model('Sesion', SesionSchema)
