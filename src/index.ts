import server from './server'

const port = process.env.PORT || 4000 //variable de entorno host

server.listen(port, ()=>{
    console.log('servidor funcionando en el puerto:', port)
})

