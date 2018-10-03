const express = require('express')
const router = express.Router()
const cervezasRouter = require('./cervezas')
const cursosRouter = require('./cursos')

router.get('/', (req, res) => {
  res.json({ mensaje: '¡Hola Mundo!' })
})

router.use('/cervezas', cervezasRouter)
router.use('/cursos', cursosRouter)

module.exports = router
