'use strict'

const Usuario = require('../modelos/usuario')


function getUsuario(req, res){
	let usuarioId = req.params.usuarioId

	Usuario.findById(usuarioId, (err, usuario) => {
		if (err) return res.status(500).send({message: `Error al realizar la petición ${err}`})

		if (!usuario) return res.status(404).send({message: 'El usuario no exixte'})

		res.status(200).send({usuario})
	})
}

function getUsuarios(req, res){

	Usuario.find({}, (err, usuarios) => {
		if(err) return res.status(500).send({message:`Error al realizar la petición: ${err}`})
		if (!usuarios) return res.status(404).send({message:'No existen usuarios'})

		res.send(200, {usuarios})
	})
}

function updateUsuario(req, res){
	let usuarioId = req.params.usuarioId
	let update = req.body

	Usuario.findByIdAndUpdate(usuarioId, update ,(err, usuarioUpdate) => {
		if (err) return res.status(500).send({message: `Error al actualizar el usuario ${err}`})

		res.status(200).send({usuario: usuarioUpdate})
	})
}

function deleteUsuario(req, res){
	let usuarioId = req.params.usuarioId

	Usuario.findById(usuarioId, (err, usuario) => {
		if (err) return res.status(500).send({message: `Error al borrar el usuario ${err}`})

		usuario.remove(err => {
			if (err) return res.status(500).send({message: `Error al borrar el usuario ${err}`})
			res.status(200).send({message: 'El usuario a sido eliminado'})
		})
	})
}

function postUsuario (req, res){
	let usuario = new Usuario()
	usuario.nombre = req.body.nombre
	usuario.foto = req.body.foto
	usuario.correo = req.body.correo
	usuario.id = req.body.id
	usuario.clave = req.body.clave
	usuario.numPartidas = req.body.numPartidas
	usuario.puntuacion = req.body.puntuacion
	usuario.listGanadas = req.body.listGanadas

	usuario.save((err, usuarioStored) =>{
		if(err) res.status(500).send({message: `Error al salvar en la base de datos: ${err}`})
			
		res.status(200).send({usuario: usuarioStored})
	})
}

module.exports = {
	getUsuario,
	getUsuarios,
	updateUsuario,
	deleteUsuario,
	postUsuario
}