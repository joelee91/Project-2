var express = require('express');
var router = express.Router();
const applicationController = require('../controllers/application')
const usersController = require('../controllers/users')



/* GET home page. */
router.get('/', applicationController.index)

router.get('/users', usersController.index)



module.exports = router
