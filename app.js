'use strict'

const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const UsuarioCtrl = require('./controlador/usuario')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//----------------------------------------------------------------------------


app.get('/api/usuario', UsuarioCtrl.getUsuarios)

app.get('/api/usuario/:usuarioId', UsuarioCtrl.getUsuario)

app.post('/api/usuario', UsuarioCtrl.postUsuario)

app.put('/api/usuario/:usuarioId',UsuarioCtrl.updateUsuario)

app.delete('/api/usuario/:usuarioId',UsuarioCtrl.deleteUsuario)

//----------------------------------------------------------------------------


module.exports = app