const express = require('express');
const router = express.Router();
const path = require('path')

//console.log(path.join(__dirname, '../views/index.html'))

//Routes
router.get('/', (req, res) => {
    res.render(path.join(__dirname, '../views/index.html'))
});


router.get('/about', (req, res) => {
    res.render(path.join(__dirname, '../views/about.html'))
});

router.get('/contact', (req, res) => {
    res.render(path.join(__dirname, '../views/contact.html'))
});

module.exports = router;