'use strict'

const express = require('express');
const router = express.Router();
const Pilotos = require('../models/Pilotos');

router.get('/', async (req, res) => {
    try {
        const arrayPilotosDB = await Pilotos.find();
        console.log(arrayPilotosDB);
        res.render("pilotos", {
            arrayPilotos: arrayPilotosDB
        })
    } catch (error) {
        console.error(error)
    }
})

router.get('/crear', (req, res) => {
    res.render('crear')
})

router.post('/', async (req, res) => {
    const body = req.body
    console.log(body)
    try {
        const pilotosDB = new Pilotos(body)
        await pilotosDB.save()
        res.redirect('/pilotos')
    } catch (error) {
        console.log('error', error)
    }
})

module.exports = router;