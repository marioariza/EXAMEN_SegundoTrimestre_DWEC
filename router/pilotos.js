'use strict'

const express = require('express');
const router = express.Router();
const Pilotos = require('../models/Pilotos');

router.get('/', (req, res) => {
    res.render('pilotos', {
        arrayPilotos: [
            {id: '001', nombre: 'Fernando Alonso', edad: '41 años', nacionalidad: 'Española', numParrilla: '14', numCarreras: '358', numVictorias: '32', numPodios: '98', equipoActual: 'Aston Martin'},
            {id: '002', nombre: 'Lewis Hamilton', edad: '38 años', nacionalidad: 'Británica', numParrilla: '44', numCarreras: '310', numVictorias: '103', numPodios: '191', equipoActual: 'Mercedes'},
            {id: '003', nombre: 'Max Verstappen', edad: '25 años', nacionalidad: 'Neerlandesa', numParrilla: '1', numCarreras: '163', numVictorias: '35', numPodios: '77', equipoActual: 'Red Bull'},
            {id: '004', nombre: 'Carlos Sainz', edad: '28 años', nacionalidad: 'Española', numParrilla: '55', numCarreras: '163', numVictorias: '1', numPodios: '15', equipoActual: 'Ferrari'},
            {id: '005', nombre: 'Charles Leclerc', edad: '25 años', nacionalidad: 'Monegasca', numParrilla: '16', numCarreras: '103', numVictorias: '5', numPodios: '24', equipoActual: 'Ferrari'},
            {id: '006', nombre: 'Sergio Pérez', edad: '33 años', nacionalidad: 'Mexicano', numParrilla: '11', numCarreras: '239', numVictorias: '4', numPodios: '26', equipoActual: 'Red Bull'},
            {id: '007', nombre: 'Lando Norris', edad: '23 años', nacionalidad: 'Británica', numParrilla: '4', numCarreras: '82', numVictorias: '0', numPodios: '6', equipoActual: 'McLaren'},
        ]
    })
})

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