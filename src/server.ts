import express from 'express' //ecmascript modules
import router from './router'

const app = express()
//lectura de datos de formulario

app.use (express.json())
app.use('/', router)

export default app