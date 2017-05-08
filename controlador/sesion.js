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
	Sesion.find({}, (err, sesiones) => {
		if(err) return res.status(500).send({message:`Error al realizar la petición: ${err}`})
		if (!sesiones) return res.status(404).send({message:'No existen sesiones'})


		res.status(200).send({sesiones})
	})
}

function updateSesion(req, res){
	let sesionId = req.params.sesionId
	let update = req.body
	console.log(sesionId)
	console.log(update)
	
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
	console.log(req.body.newSesionData)

	sesion.numPartidas = req.body.newSesionData.numPartidas
	sesion.numColumnas = req.body.newSesionData.numColumnas
	sesion.numFilas = req.body.newSesionData.numFilas
	sesion.condGanar = req.body.newSesionData.condGanar 
	sesion.estado = req.body.newSesionData.estado
	sesion.idJugador1 = req.body.newSesionData.idJugador1
	sesion.idJugador2 = req.body.newSesionData.idJugador2
	sesion.listPartidas = req.body.newSesionData.listPartidas
	sesion.backGroundColor = req.body.newSesionData.backGroundColor
	sesion.colorJugador1 = req.body.newSesionData.colorJugador1
	sesion.colorJugador2 = req.body.newSesionData.colorJugador2
	sesion.juegoActual = req.body.newSesionData.juegoActual
	sesion.puntuacion = req.body.newSesionData.puntuacion
	sesion.nombre = req.body.newSesionData.nombre

	sesion.save((err, sesionStored) =>{
		if(err) res.status(500).send({message: `Error al salvar en la base de datos: ${err}`})
			
		res.status(200).send({sesion: sesionStored})
	})
}

function getSesionesWaiting(req, res){
	console.log(req.params.estado)
	let estado = req.params.estado
	Sesion.find({"estado": estado}, (err, sesiones) => {
		if(err) return res.status(500).send({message:`Error al realizar la petición: ${err}`})
		if (!sesiones) return res.status(404).send({message:'No existen sesiones'})


		res.status(200).send({sesiones})
	})
}


module.exports = {
	getSesion,
	getSesiones,
	updateSesion,
	deleteSesion,
	postSesion,
	getSesionesWaiting
}