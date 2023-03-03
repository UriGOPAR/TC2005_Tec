const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/ordenar', (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'Lab_2-A01709413.html'));
});

module.exports = router;