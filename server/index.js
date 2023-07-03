const express = require('express');
const app = express();


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


app.listen(3000);