import express from 'express'
import { Router } from './routes'
import bodyParser from 'body-parser'

require('dotenv').config({path:'../variables.env'})
const app = express()
const cors = require('cors')


app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(Router)


export { app }