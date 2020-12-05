import express from 'express'
import morgan from 'morgan'

const app = express()

app.use(morgan('dev'))
app.use(express.json({ extended: true }))
app.use(express.urlencoded({ extended: true }))

export default app
