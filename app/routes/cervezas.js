const express = require('express')
const router = express.Router()
router.get('/', (req, res) => {
  res.json({ mensaje: '¡A beber cerveza!' })
})
router.post('/', (req, res) => {
  res.json({ mensaje: 'cerveza guardada' })
})
router.get('/search', (req, res) => {
  res.json({ mensaje: `Buscar cerveza ${req.query.q}` })
})
router.get('/:id', (req, res) => {
  res.json({ mensaje: `¡A beber cerveza con id ${req.params.id}!` })
})
router.put('/:id', (req, res) => {
  res.json({ mensaje: `Actualizar cerveza con id ${req.params.id}` })
})
router.delete('/:id', (req, res) => {
  res.json({ mensaje: `Cerveza borrada con id ${req.params.id}` })
})
module.exports = router
