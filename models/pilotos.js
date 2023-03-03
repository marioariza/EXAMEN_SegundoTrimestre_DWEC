'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pilotosSchema = new Schema ({
    id: String,
    nombre: String,
    edad: String,
    nacionalidad: String,
    numParrilla: String,
    numCarreras: String,
    numVictorias: String,
    numPodios: String,
    equipoActual: String
})

// Creamos el modelo
const Pilotos = mongoose.model('Pilotos', pilotosSchema, "pilotos");

module.exports = Pilotos;