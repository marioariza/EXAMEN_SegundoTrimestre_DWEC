'use strict'

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { titulo: "mi título dinámico" })
})

router.get('/contacto', (req, res) => {
    res.render("contacto", {tituloContacto: "Estamos en contacto de manera dinámica!"})
})

router.use((req, res) => {
    res.status(404).render('404', {titulo: "Error 404", descripcion: "Page not Found"})
})

module.exports = router;