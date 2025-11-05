const express = require('express');
const router = express.Router();
const Review = require('../modelos/Review');

// Metodo get
router.get('/', async (req, res) => {
    try {
        const reviews = await Review.find();
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las reseñas' });
    }
});

// Metodo post 
router.post('/', async (req, res) => {
    try {
        const nuevaReview = new Review(req.body);
        const reviewGuardada = await nuevaReview.save();
        res.status(201).json(reviewGuardada);
    } catch (error) {
        res.status(500).json({ error: 'Error al guardar la reseña' });
    }
});

// Metodo put
router.put('/:id', async (req, res) => {
    try {
        const reviewActualizada = await Review.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true },
        );
        res.json(reviewActualizada);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar la reseña'})
    }
});

// Metodo delete
router.delete('/:id', async (req, res) => {
    try {
        await Review.findByIdAndDelete(
            req.params.id,
        );
        res.json({ mensaje: 'Reseña Eliminada' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar la reseña' });
    }
});

module.exports = router;