const express = require('express');
const path = require('path');

const router = express.Router();

const basePath = path.join(__dirname, '../templates');

router.get('/all', (req, res) => {
    res.sendFile(`${basePath}/products.html`);
})

module.exports = router;