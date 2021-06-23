const router = require('express').Router()

const personController = require('./controller/personController')
const areaController = require('./controller/areaController')
const productController = require('./controller/productController')
const careerController = require('./controller/careerController')

router.get('/api/', (req, res) => {
  res.send('Up and running')
})

router.post('/api/people/add', personController.add)
router.get('/api/people/list', personController.findAll)
router.get('/api/people/career/:id', personController.findByRole)
router.get('/api/people/:id', personController.findById)

router.post('/api/career/add', careerController.add)
router.get('/api/career/list', careerController.findAll)
router.get('/api/career/:id', careerController.find)

router.post('/api/area/add', areaController.add)
router.get('/api/area/list', areaController.findAll)
router.get('/api/area/:id', areaController.findById)

router.post('/api/product/add', productController.add)
router.get('/api/product/list', productController.findAll)
router.get('/api/product/:id', productController.findById)
router.get('/api/product/new/:count', productController.findNewProducts)

router.post('/api/people/assign', personController.assigns)

module.exports = router
