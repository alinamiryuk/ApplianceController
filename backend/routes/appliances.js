import express from 'express'
import Appliance from '../models/Appliance.js'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const appliances = await Appliance.find()
    res.status(200).json(appliances)
  } catch (err) {
    res.status(500).json({ message: 'Something goes wrong' })
  }
})

router.post('/create', (req, res) => {
  const message = req.body
  Appliance.create(message, (err, data) =>
    err ? res.status(500).send(err) : res.status(201).send(data)
  )
})

export { router as appliancesRouter }
