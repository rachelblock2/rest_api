const express = require('express');

const profController = require('../controllers/professional');

const router = express.Router();

// GET /professional
router.get('/', profController.getData);

module.exports = router;