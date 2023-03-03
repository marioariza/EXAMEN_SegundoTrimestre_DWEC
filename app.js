'use strict'

let express = require('express'),
mongoose = require('mongoose'),
app = express();

require('dotenv').config();
let port = process.env.PORT || 3000;

app.use(express.static(__dirname +'/public/'));
// app.use('/favicon.jpg', express.static('public/img/favicon.jpg'));

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views/')

app.use('/', require('./router/rutas'));
app.use('/pilotos', require('./router/pilotos'));

// Conexión BBDD

// Variables que tendremos siempre:

const user = '';
const password = '';
const dbname = '';

// URL de conexión
const uri = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.njgr5tz.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

mongoose.connect(uri,
    { useNewUrlParser: true, useUnifiedTopology: true }
)
    .then(() => console.log('Base de datos conectada'))
    .catch(e => console.log(e))

app.use((req, res) => {
        res.status(404).render('404', {titulo: "Error 404", descripcion: "Page not Found"})
    })

    .listen(port)

console.log('Iniciando Express en el puerto 3000')