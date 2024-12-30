import mongoose from "mongoose"
import colors from 'colors'

export const connectDB = async () =>{
    try{
        if (!process.env.MONGO_URI) {
            console.error("Error: MONGO_URI no está definido en el archivo .env");
            process.exit(1);
        }
        const {connection} = await mongoose.connect(process.env.MONGO_URI)
        console.log(connection)

        const url = `${connection.host}:${connection.port}`
        console.log(colors.magenta.italic(`base de datos conectada en:${url}`))
    }catch(error){
        console.log(colors.bgRed.white.italic(error.message))
        process.exit(1)
    }
}