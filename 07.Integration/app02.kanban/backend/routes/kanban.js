const express = require('express');
const controller = require('../controllers/kanban');

const router = express.Router();
router.route('/cards').get(controller.readAllCards);
router.route('/card/:cardNo/task').post(controller.createTask);
router.route('/card/:cardNo/:taskNo').delete(controller.deleteTask);

module.exports = router;