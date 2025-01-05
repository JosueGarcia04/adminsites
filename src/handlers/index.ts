import {Request, Response} from 'express'
import {validationResult} from 'express-validator'
import slugify from 'slugify'
import User from '../models/User'
import { hashPassword, checked } from '../utils/auth'

export const createAccount = async (req: Request, res: Response) => {

    const {email, password} = req.body
      //verificar existencia de usuarios
    const UserExist = await User.findOne({email})
    if(UserExist){
        console.log("email no existente")
    }
    const handle = slugify(req.body.handle, '')


    //verificacion del handle
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

export const login = async (req: Request, res: Response)=>{
    //manejo de errores
    let errors = validationResult(req)
    if(!errors.isEmpty()){
        res.status(400).json({errors:errors.array()})
    }

    const {email, password} = req.body
      //verificar existencia de usuarios
    const user = await User.findOne({email})
    if(!user){
        console.log("el usuario no existe")
    }

    //verificacion del password de un usuario
    console.log(user.password)
    const CorrectPassword= await checked(password, user.password)
    if(!CorrectPassword){
        console.log("contraseña incorrecta")
    }
    res.send('logueado')
}