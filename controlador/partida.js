'use strict'

const Partida = require('../modelos/partida')


function getPartida(req, res){
	let partidaId = req.params.partidaId

	Partida.findById(partidaId, (err, partida) => {
		if (err) return res.status(500).send({message: `Error al realizar la petición ${err}`})

		if (!partida) return res.status(404).send({message: 'La partida no exixte'})

		res.status(200).send({partida})
	})
}

function getPartidas(req, res){

	Partida.find({}, (err, partidas) => {
		if(err) return res.status(500).send({message:`Error al realizar la petición: ${err}`})
		if (!partidas) return res.status(404).send({message:'No existen partidas'})

		//res.send(200, {partidas})
		res.status(200).send({partidas})
	})
}

function updatePartida(req, res){
	let partidaId = req.params.partidaId
	let update = req.body

	Partida.findByIdAndUpdate(partidaId, update ,(err, partidaUpdate) => {
		if (err) return res.status(500).send({message: `Error al actualizar la partida ${err}`})

		res.status(200).send({partida: partidaUpdate})
	})
}

function deletePartida(req, res){
	let partidaId = req.params.partidaId

	Partida.findById(partidaId, (err, partida) => {
		if (err) return res.status(500).send({message: `Error al borrar la partida ${err}`})

		partida.remove(err => {
			if (err) return res.status(500).send({message: `Error al borrar la partida ${err}`})
			res.status(200).send({message: 'La partida ha sido eliminado'})
		})
	})
}

function postPartida (req, res){
	let partida = new Partida()

	partida.tablero = req.body.tablero
	partida.ganador = req.body.ganador
	partida.actual = req.body.actual
	partida.numMovimiento = req.body.numMovimiento

	partida.save((err, partidaStored) =>{
		if(err) res.status(500).send({message: `Error al salvar en la base de datos: ${err}`})
			
		res.status(200).send({partida: partidaStored})
	})
}

module.exports = {
	getPartida,
	getPartidas,
	updatePartida,
	deletePartida,
	postPartida
}