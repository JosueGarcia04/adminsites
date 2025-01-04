import {Request, Response} from 'express'
import slugify from 'slugify'
import User from '../models/User'
import { hashPassword } from '../utils/auth'

export const createAccount = async (req: Request, res: Response) => {
    const {email, password} = req.body
      //verificar existencia de usuarios
    const UserExist = await User.findOne({email})
    if(UserExist){
        console.log("email no existente")
    }
    const handle = slugify(req.body.handle, '')

    const HandleExist = await User.findOne({handle})
    if(HandleExist){
        console.log("nombre de usuario no disponible")
    }

    //creacion del usuario
    const user = new User(req.body)
    user.password= await hashPassword(password)
    user.handle = handle
    await user.save()
    res.status(201).send('registro exitoso')
}