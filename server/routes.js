const router = require('express').Router()

const personController = require('./controller/personController')
const areaController = require('./controller/areaController')
const productController = require('./controller/productController')
const careerController = require('./controller/careerController')

router.get('/', (req, res) => {
  req.send('Up and running')
})

router.post('/people/add', personController.add)
router.get('/people/list', personController.findAll)
router.get('/people/career/:id', personController.findByRole)
router.get('/people/:id', personController.findById)

router.post('/career/add', careerController.add)
router.get('/career/list', careerController.findAll)
router.get('/career/:id', careerController.find)

router.post('/area/add', areaController.add)
router.get('/area/list', areaController.findAll)
router.get('/area/:id', areaController.findById)

router.post('/product/add', productController.add)
router.get('/product/list', productController.findAll)
router.get('/product/:id', productController.findById)

router.post('/people/assign', personController.assigns)

module.exports = router
