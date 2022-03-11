const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

router.get('/', adminController.getService);

router.get('/about', adminController.getAbout);

module.exports = router;
