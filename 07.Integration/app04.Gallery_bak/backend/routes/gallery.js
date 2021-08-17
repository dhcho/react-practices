const express = require('express');
const authorized = require('./authorized');
const controller = require('../controllers/gallery');

const router = express.Router();
router.route('').get(controller.read);
router.route('').get(controller.delete);
router.route('').post(controller.create);
module.exports = router;