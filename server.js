const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());Con re

// Conenctar rutas
const rutasJuegos = require('./rutas/juegos');
const rutasReviews = require('./rutas/reviews');
app.use('/api/juegos', rutasJuegos);
app.use('/api/reviews', rutasReviews);

const MONGO_URI = 'mongodb+srv://jacobogarcesoquendo:aFJzVMGN3o7fA38A@cluster0.mqwbn.mongodb.net/JorgeQuevedoCaballero';
const PUERTO = 3000;

mongoose .connect(MONGO_URI)
    .then(() => console.log('Conectado a MongoDB'))
    .catch((err) => console.error('Error de conexión:', err));

app.get('/', (req, res) => {
    res.send('GameTracker funcionando');
})

app.listen(PUERTO, () => {
    console.log(`Servidor iniciado en el puerto ${PUERTO}`);
});