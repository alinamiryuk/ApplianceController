import express from 'express'
import Appliance from '../models/Appliance.js'

const router = express.Router()

router
  .route('/')
  .get(async (req, res) => {
    try {
      const appliances = await Appliance.find()
      res.status(200).json(appliances)
    } catch (err) {
      res.status(500).json({ message: 'Something went wrong' })
    }
  })
  .post(async (req, res) => {
    try {
      const data = req.body
      const appliance = new Appliance(data)
      await appliance.save()
      res.status(201).json({ appliance })
    } catch (err) {
      res.status(500).json({ message: 'Something went wrong' })
    }
  })
  .delete(async (req, res) => {
    try {
      const id = req.body._id
      await Appliance.remove({ _id: id })
      const appliances = await Appliance.find()
      res.status(200).json(appliances)
    } catch (err) {
      res.status(500).json({ message: 'Something went wrong' })
    }
  })
  .put(async (req, res) => {
    try {
      const newData = req.body
      await Appliance.findByIdAndUpdate(newData._id, newData)
      const appliances = await Appliance.find()
      res.status(200).json(appliances)
    } catch (err) {
      res.status(500).json({ message: 'Something went wrong' })
    }
  })

export { router as appliancesRouter }
