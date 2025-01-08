import colors from 'colors'
import server from './server'

const port = process.env.PORT || 4000 //variable de entorno host

server.listen(port, ()=>{
    console.log(colors.magenta.italic('servidor funcionando en el puerto:'), port)
})

