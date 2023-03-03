'use strict'

let express = require('express'),
    app = express(),
    ruta = app.use(express.static(__dirname+'/assets/'));

    app.set('view engine', 'ejs')
    app.set('views', __dirname + 'views/')

app
    .get('/', (req, res) => {
        res.redirect("index", {titulo: "mi título dinámico"})
    })

    .use((req, res) => {
        res.status(404).sendFile(`${__dirname}/assets/404.html`)
    })

    .listen(3000)

console.log('Iniciando Express en el puerto 3000')