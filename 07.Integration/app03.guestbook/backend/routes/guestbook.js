const express = require('express');
const controller = require('../controllers/guestbook')

const router = express.Router();
router.route('/index').get(controller.index);
router.route('/searchIndex').get(controller.findIndex);
router.route('/add').get(controller.form);
router.route('/add').post(controller.add);
router.route('/deleteform/:no').get(controller.deleteform);
router.route('/delete').delete(controller.delete);

module.exports = router;