var express = require('express');
var router = express.Router();
const applicationController = require('../controllers/application')


/* GET home page. */
router.get('/', applicationController.index)

module.exports = router;
