import { hostname } from 'os'
import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

const PORT = process.env.PORT ?? 3000

app.get('/', (req, res) => {
  res.send(`Hello ${hostname()}!`)
})

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})
