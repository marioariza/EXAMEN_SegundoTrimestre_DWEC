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
        res.redirect('/')
    } catch (error) {
        console.log('error', error)
    }
})

router.get('/detalles/:id', async(req, res) => {
    const id = req.params.id
    try {
        const pilotosDB = await Pilotos.findOne({ _id:id })
        console.log(pilotosDB)
        res.render('detalles', {
            piloto: pilotosDB,
            error: false
        })
    } catch (error) {
        console.log('Se ha producido un error', error)
        res.render('detalles', {
            error: true,
            mensaje: 'Piloto no encontrado!'
        })
    }
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id
    console.log('_id desde backend', id)
    try {
        const pilotosDB = await Pilotos.findByIdAndDelete({ _id: id });
        console.log(pilotosDB)
        if (!pilotosDB) {
            res.json({
                estado: false,
                mensaje: 'No se puede eliminar el piloto.'
            })
        } else {
            res.json({
                estado: true,
                mensaje: 'Piloto eliminado.'
            })
        }
    } catch (error) {
        console.log(error)
    }
})

router.put('/detalles/:id', async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    console.log(id)
    console.log('body', body)
    try {
        const pilotosDB = await Pilotos.findByIdAndUpdate(
            id, body, { useFindAndModify: false }
        )
        console.log(pilotosDB)
        res.json({
            estado: true,
            mensaje: 'Piloto editado'
        })
    } catch (error) {
        console.log(error)
        res.json({
            estado: false,
            mensaje: 'Problema al editar el piloto'
        })
    }
})

module.exports = router;