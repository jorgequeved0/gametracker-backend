const express = require('express');
const router = express.Router();
const Juego = require('../modelos/Juego');
const Review = require('../modelos/Review');

// Metodo Get
router.get('/', async (req, res) => {
    const juegos = await Juego.find();
    res.json(juegos);
});

// Metodo post
router.post('/', async (req, res) => {
    const nuevoJuego = new Juego(req.body);
    const juegoGuardado = await nuevoJuego.save();
    res.status(201).json(juegoGuardado);
});

// Metodo put
router.put('/:id', async (req, res) => {
    const juegoActualizado= await Juego.findByIdAndUpdate(
        req.params.id, 
        req.body, 
        { new: true },
    )
    res.json(juegoActualizado);
});

// Metodo delete
router.delete('/:id', async (req, res) => {
    await Juego.findByIdAndDelete(
        req.params.id,
    );
    res.json({ mensaje: 'Juego Eliminado' });
});

module.exports = router;