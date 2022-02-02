const router = require('express').Router()

const exerciseCtrl = require('../controllers/exerciseCtrl')


router.post('/add', exerciseCtrl.addExercise)
router.delete('/deleteExercise/:id', exerciseCtrl.deleteExercise)
router.get('/allExercises', exerciseCtrl.getExercises)

module.exports = router