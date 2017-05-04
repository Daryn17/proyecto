'use strict'

const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const UsuarioCtrl = require('./controlador/usuario')
const PartidaCtrl = require('./controlador/partida')
const SesionCtrl = require('./controlador/sesion')


app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//----------------------------------------------------------------------------


app.get('/api/usuario', UsuarioCtrl.getUsuarios)

app.get('/api/usuario/:usuarioId', UsuarioCtrl.getUsuario)

app.post('/api/usuario', UsuarioCtrl.postUsuario)

app.put('/api/usuario/:usuarioId',UsuarioCtrl.updateUsuario)

app.delete('/api/usuario/:usuarioId',UsuarioCtrl.deleteUsuario)

//----------------------------------------------------------------------------

//----------------------------------------------------------------------------


app.get('/api/partida', PartidaCtrl.getPartidas)

app.get('/api/partida/:partidaId', PartidaCtrl.getPartida)

app.post('/api/partida', PartidaCtrl.postPartida)

app.put('/api/partida/:partidaId',PartidaCtrl.updatePartida)

app.delete('/api/partida/:partidaId',PartidaCtrl.deletePartida)

app.get('/api/partidas/:partidasId', PartidaCtrl.getPartidasSesion)

//----------------------------------------------------------------------------

//----------------------------------------------------------------------------


app.get('/api/sesion', SesionCtrl.getSesiones)

app.get('/api/sesion/:sesionId', SesionCtrl.getSesion)

app.post('/api/sesion', SesionCtrl.postSesion)

app.put('/api/sesion/:sesionId',SesionCtrl.updateSesion)

app.delete('/api/sesion/:sesionId',SesionCtrl.deleteSesion)

//----------------------------------------------------------------------------

module.exports = app