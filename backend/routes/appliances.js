import express from 'express'
import Appliance from '../models/Appliance.js'

const router = express.Router()

router.get('/', (req, res) => {
  Appliance.find((err, data) =>
    err ? res.status(500).send(err) : res.status(200).send(data)
  )
})

router.post('/create', (req, res) => {
  const message = req.body
  Appliance.create(message, (err, data) =>
    err ? res.status(500).send(err) : res.status(201).send(data)
  )
})

export { router as appliancesRouter }
