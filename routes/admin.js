const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

router.get('/', adminController.getService);

router.get('/about', adminController.getAbout);

router.get('/server-error', adminController.getError);

module.exports = router;
