import express from 'express' //ecmascript modules

const app = express()

app.get('/', (req,res)=>{
    res.send('hola mundooo')
})

const port = process.env.PORT || 4000 //variable de entorno host

app.listen(port, ()=>{
    console.log('servidor funcionando en el puerto:', port)
})

