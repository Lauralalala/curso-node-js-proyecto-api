var express = require('express') // llamamos a Express
var app = express()
var router = require('./routes')

var port = process.env.PORT || 8080 // establecemos nuestro puerto

app.use('/api', router)

// iniciamos nuestro servidor
app.listen(port, () => {
  console.log('API escuchando en el puerto ' + port)
})
console.log('API todavía no está escuchando')
