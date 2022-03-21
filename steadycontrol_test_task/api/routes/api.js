const {Router} = require('express')
const dataController = require('../controllers/dataController')

const router = Router()

router.post('/cities',dataController.addCities)
router.post('/citizens',dataController.addCitizens)
router.get('/',dataController.getData)

module.exports = router