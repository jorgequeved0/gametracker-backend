const mongoose = require('mongoose');

const juegoSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true,
        trim: true,
    },
    plataforma: {
        type: String,
        required: true,
        trim: true,
    },
    genero: {
        type: String,
        required: true,
        trim: true,
    },
    añoLanzamiento: {
        type: String,
        required: true,
        trim: true,
    },
    desarrollador: {
        type: String,
        required: true,
        trim: true,
    },
    imagenPortada: {
        type: String,
        trim: true,
    },
    descripcion: {
        type: String,
        trim: true,
    },
    completado: {
        type: Boolean,
        default: false,
    },
    fechaCreacion: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('Juego', juegoSchema);