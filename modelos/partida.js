'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PartidaSchema = Schema({
	tablero: [Number],
	ganador: String,
	actual: String,
	numMovimiento: Number
})

module.exports = mongoose.model('Partida', PartidaSchema)

