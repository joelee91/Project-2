var express = require('express');
var router = express.Router();
const applicationController = require('../controllers/application')
const usersController = require('../controllers/users')
const categorysController = require('../controllers/categorys')


/* GET home page. */
router.get('/', applicationController.index)

router.get('/user', usersController.index)

router.get('/inventory', categorysController.index)

module.exports = router
