import express from 'express'
import Appliance from '../models/Appliance.js'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const appliances = await Appliance.find()
    res.status(200).json(appliances)
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.post('/create', async (req, res) => {
  try {
    const data = req.body
    const appliance = new Appliance(data)
    await appliance.save()
    res.status(201).json({ appliance })
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.delete('/delete', async (req, res) => {
  try {
    const id = req.body._id
    await Appliance.remove({ _id: id })
    const appliances = await Appliance.find()
    res.status(200).json(appliances)
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export { router as appliancesRouter }
