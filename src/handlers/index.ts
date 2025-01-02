import type {Request, Response} from 'express'
import User from '../models/User'
import { hashPassword } from '../utils/auth'

export const createAccount = async (req: Request, res: Response) => {
    //verificar existencia de usuarios
    const {email, password} = req.body
    console.log(email)
    const UserExist = await User.findOne({email})
    if(UserExist){
       console.log("usuario existente")
    }else{
        console.log("usuario no existente ")
    }

    //creacion del usuario
    const user = new User(req.body)
    user.password= await hashPassword(password)
    await user.save()
    res.send('registro exitoso')
}