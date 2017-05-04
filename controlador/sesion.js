'use strict'

const Sesion = require('../modelos/sesion')


function getSesion(req, res){
	let sesionId = req.params.sesionId
	console.log("Una sesion")
	Sesion.findById(sesionId, (err, sesion) => {
		if (err) return res.status(500).send({message: `Error al realizar la petición ${err}`})

		if (!sesion) return res.status(404).send({message: 'La sesion no exixte'})

		res.status(200).send({sesion})
	})
}

function getSesiones(req, res){
	console.log("Varias sesiones")
	Sesion.find({}, (err, sesiones) => {
		if(err) return res.status(500).send({message:`Error al realizar la petición: ${err}`})
		if (!sesiones) return res.status(404).send({message:'No existen sesiones'})

		//res.send(200, {sesiones})
		res.status(200).send({sesiones})
	})
}

function updateSesion(req, res){
	let sesionId = req.params.sesionId
	let update = req.body

	Sesion.findByIdAndUpdate(sesionId, update ,(err, sesionUpdate) => {
		if (err) return res.status(500).send({message: `Error al actualizar la sesion ${err}`})

		res.status(200).send({sesion: sesionUpdate})
	})
}

function deleteSesion(req, res){
	let sesionId = req.params.sesionId

	Sesion.findById(sesionId, (err, sesion) => {
		if (err) return res.status(500).send({message: `Error al borrar la sesion ${err}`})

		sesion.remove(err => {
			if (err) return res.status(500).send({message: `Error al borrar la sesion ${err}`})
			res.status(200).send({message: 'La sesion ha sido eliminado'})
		})
	})
}

function postSesion (req, res){
	let sesion = new Sesion()

	sesion.numPartidas = req.body.numPartidas
	sesion.numColumnas = req.body.numColumnas
	sesion.numFilas = req.body.numFilas
	sesion.condGanar = req.body.condGanar 
	sesion.estado = req.body.estado
	sesion.idJugador1 = req.body.idJugador1
	sesion.idJugador2 = req.body.idJugador2
	sesion.listPartidas = req.body.listPartidas
	sesion.backGroundColor = req.body.backGroundColor
	sesion.colorJugador1 = req.body.colorJugador1
	sesion.colorJugador2 = req.body.colorJugador2
	sesion.juegoActual = req.body.juegoActual

	sesion.save((err, sesionStored) =>{
		if(err) res.status(500).send({message: `Error al salvar en la base de datos: ${err}`})
			
		res.status(200).send({sesion: sesionStored})
	})
}

module.exports = {
	getSesion,
	getSesiones,
	updateSesion,
	deleteSesion,
	postSesion
}