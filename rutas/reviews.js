const express = require('express');
const router = express.Router();
const Review = require('../modelos/Review');

// Metodo get
router.get('/', async (req, res) => {
    const reviews = await Review.find();
    res.json(reviews);
});

// Metodo post 
router.post('/', async (req, res) => {
    const nuevaReview = new Review(req.body);
    const reviewGuardada = await nuevaReview.save();
    res.status(201).json(reviewGuardada);
});

// Metodo put
router.put('/:id', async (req, res) => {
    const reviewActualizada = await Review.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true },
    );
});

// Metodo delete
router.put('/:id', async (req, res) => {
    await Review.findByIdAndDelete(
        req.params.id,
    );
    res.json({ mensaje: 'Reseña Eliminada' });
});

module.exports = router;