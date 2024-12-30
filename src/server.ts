import express from 'express' //ecmascript modules
import router from './router'
import { connectDB } from './config/db'

const app = express()
connectDB()
//lectura de datos de formulario

app.use (express.json())
app.use('/', router)

export default app