import express from 'express'
import morgan from 'morgan'
import { appliancesRouter } from './routes/appliances.js'
const app = express()

app.use(morgan('dev'))
app.use(express.json({ extended: true }))
app.use(express.urlencoded({ extended: true }))

app.use('/api/appliances', appliancesRouter)

export default app
