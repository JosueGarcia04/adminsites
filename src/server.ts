import express from 'express' //ecmascript modules

const app = express()

app.get('/', (req,res)=>{
    res.send('hola mundooo')
})

export default app