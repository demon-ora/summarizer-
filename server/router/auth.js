const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');


router.get('/', (req, res) => {
    res.send('Hello World!');
});

router.post('/register', async (req, res) => {
    console.log(req.body);
    res.json({ message: req.body });
});

module.exports = router;