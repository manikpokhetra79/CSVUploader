const express = require('express');
const router = express.Router();
const csvController = require('../controllers/csvController');

//page routes
router.get('/uploader', csvController.uploader);
router.get('/displayfiles', csvController.displayfiles);

//action routes
router.post('/upload', csvController.upload);
router.get('/delete/:id', csvController.deleteFile);
module.exports = router;
