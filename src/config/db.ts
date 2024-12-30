import mongoose from "mongoose"

export const connectDB = async () =>{
    try{
        const url = 'mongodb+srv://root:vM8XLqqf3yG0BT7X@database.ti7j8.mongodb.net/adminsites'
        const {connection} = await mongoose.connect(url)
        console.log(connection)

        const url2 = `${connection.host}:${connection.port}`
        console.log(`base de datos conectada en: ${url2}`)
    }catch(error){
        console.log(error)

    }
}