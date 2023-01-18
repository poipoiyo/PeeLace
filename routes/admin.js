const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

router.get('/', adminController.getMain);

router.get('/main', adminController.getUserLatLng); 

router.get('/about', adminController.getAbout);
 
//------------------------------------------------
// expect URL :
// http://localhost:3000/main?x=<lat>&y=<lng>
// example :
// http://localhost:3000/main?x=25.001&y=-121.500
//------------------------------------------------

module.exports = router;
