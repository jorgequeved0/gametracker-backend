const express = require('express');
const router = express.Router();
const Juego = require('../modelos/Juego');

// Metodo Get
router.get('/', async (req, res) => {
    try {
        const juegos = await Juego.find();
        res.json(juegos);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los juegos' });
    }
});

// Metodo post
router.post('/', async (req, res) => {
    try {
        const nuevoJuego = new Juego(req.body);
        const juegoGuardado = await nuevoJuego.save();
        res.status(201).json(juegoGuardado);
    } catch (error) {
        res.status(500).json({ error: 'Error al guardar el juego'});
    }
});

// Metodo put
router.put('/:id', async (req, res) => {
    try {
       const juegoActualizado= await Juego.findByIdAndUpdate(
        req.params.id, 
        req.body, 
        { new: true },
        );
        res.json(juegoActualizado); 
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el juego' });
    }
});

// Metodo delete
router.delete('/:id', async (req, res) => {
    try {
        await Juego.findByIdAndDelete(
            req.params.id,
        );
        res.json({ mensaje: 'Juego Eliminado' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar  el juego' });
    }
});

module.exports = router;