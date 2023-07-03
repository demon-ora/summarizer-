const express = require('express');
const dotenv = require('dotenv');
const app = express();
const mongoose = require('mongoose');

dotenv.config({ path: './config.env' });

require('./db/conn');
const PORT = process.env.PORT || 3000;



app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/signup', (req, res) => {
    res.send('Hello World!');
});

app.get('/signin', (req, res) => {
    res.send('Hello World!');
});

app.get('/summrize', (req, res) => {
    res.send('Hello World!');
});


app.listen(PORT);