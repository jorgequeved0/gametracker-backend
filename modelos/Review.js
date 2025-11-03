const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    juegoId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Juego',
        required: true,
    },
    puntuacion: {
        type: Number,
        min: 1,
        max: 5,
        required:true,
    },
    textoReseña: {
        type: String,
        trim: true,
    },
    horasJugadas: {
        type: Number,
        min: 0,
    },
    dificultad: {
        type: String,
        enum: ["Fácil", "Normal", "Difícil"],
        required: true,
    },
    recomendaria: {
        type: Boolean,
        default: false,
    },
    fechaCreacion: {
        type: Date,
        default: Date.now
    },
    fechaActualizacion: {
        type: Date,
    },
})

module.exports = mongoose.model('Review', reviewSchema);