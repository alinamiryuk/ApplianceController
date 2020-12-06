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

router.post('/create', async (req, res) => {
  try {
    const data = req.body
    const appliance = new Appliance(data)
    await appliance.save()
    res.status(201).json({ appliance })
  } catch (err) {
    res.status(500).json({ message: 'Something goes wrong' })
  }
})

export { router as appliancesRouter }
