// DO YOUR MAGIC
const Cars = require('./cars-model')
const router = require('express').Router()
const { checkCarId, checkCarPayload, checkVinNumberValid, checkVinNumberUnique } = require('./cars-middleware')

router.get('/', async (req, res, next) => {
    try {
        const cars = await Cars.getAll()
        res.json(cars)
    } catch (err) { next(err) }
})

router.get('/:id', checkCarId, async (req, res, next) => {
    res.status(200).json(req.car)
})

router.post('/', checkCarPayload, checkVinNumberValid, checkVinNumberUnique, async (req, res, next) => {
    console.log('post ran')
    try {
        const newCar = await Cars.create(req.body)
        res.status(201).json(newCar)
    } catch (err) { next(err) }
})

module.exports = router