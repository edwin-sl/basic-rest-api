const express = require('express');
let router = express.Router();
let DB = require('../db/db')

// Operaciones especificas para el recurso de 'usuarios'

// GET consultar coleccion de usuarios
router.get('/', (req, res, next) => {
  let users = DB.select('users')
  res.status(200).send(users)
});

// GET consultar usuario especifico
router.get('/:id', (req, res, next) => {
  let id = parseInt(req.params.id)
  let user = DB.select('users', id)
  res.status(200).send(user)
});

// POST insertar usuario
router.post('/', (req, res, next) => {
  let user = DB.insert('users', req.body)
  res.status(200).send(user)
})

// PUT actualizar usuario
router.put('/:id', (req, res, next) => {
  let id = parseInt(req.params.id)
  let object = Object.assign(req.body, {id: id})
  let user = DB.update('users', object)
  res.status(200).send(user)
})

// DELETE borrar usuario
router.delete('/:id', (req, res, next) => {
  let id = parseInt(req.params.id)
  let user = DB.remove('users', id)
  res.status(200).send(user)
})

module.exports = router;
