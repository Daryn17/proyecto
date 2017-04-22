'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UsuarioSchema = Schema({
	nombre: String,
	foto: String,
	correo: String,
	id: Number
})

module.exports = mongoose.model('Product', UsuarioSchema)