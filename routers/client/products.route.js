
const express = require('express');
const router = express.Router();
const productController = require('../../controllers/client/product.controller.js');


router.get('/', productController.index)
 module.exports = router;