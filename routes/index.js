var express = require('express');
var router = express.Router();
const applicationController = require('../controllers/application')
const usersController = require('../controllers/users')
const categorysController = require('../controllers/categorys')
const subcategorysController = require('../controllers/subcategorys')
const productsController = require('../controllers/products')

/* GET home page. */
router.get('/', applicationController.index)

router.get('/user', usersController.index)

router.get('/categorys', categorysController.index)
router.get('/categorys/:categorysId', categorysController.show)


router.get('/categorys/:categorysId/:subcategorysId', subcategorysController.show)

router.get('/products', productsController.index)
router.get('/user/new', productsController.new)
router.get('/categorys/:categorysId/:subcategorysId/:productsId', productsController.show)
router.post('/user', productsController.create)
router.get('/user/:productsId/edit', productsController.edit)
router.put('/user/:productsId', productsController.update)
router.delete('/user/:productsId', productsController.delete)

module.exports = router
