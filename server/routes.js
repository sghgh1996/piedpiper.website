const router = require('express').Router()

const personController = require('./controller/personController')
const careerController = require('./controller/careerController')

router.get('/', personController.findAll)

router.post('/people/add', personController.add)
router.get('/people/list', personController.findAll)
router.get('/people/career/:id', personController.findByRole)
router.get('/people/:id', personController.findById)

router.post('/career/add', careerController.add)
router.get('/career/list', careerController.findAll)
router.get('/career/:id', careerController.find)

module.exports = router
