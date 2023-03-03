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

module.exports = router;