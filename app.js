'use strict'

let express = require('express');
let app = express();

app.use(express.static(__dirname +'/public/'));

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views/')

app.use('/', require('./router/rutas'));

app.use((req, res) => {
        res.status(404).render('404', {titulo: "Error 404", descripcion: "Page not Found"})
    })

    .listen(3000)

console.log('Iniciando Express en el puerto 3000')