const { Router } = require('express')
const controllers = require('../controllers/equipments')

const router = Router()

router.get('/equipments', controllers.getEquipments)
router.get('/equipments/:id', controllers.getEquipment)
router.post('/equipments', controllers.createEquipment)
router.put('/equipments/:id', controllers.updateEquipment)
router.delete('/equipments/:id', controllers.deleteEquipment)

module.exports = router