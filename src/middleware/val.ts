import type {Request, Response, NextFunction} from 'express'
import { validationResult } from 'express-validator'
export const handlerInputError = (req:Request, res:Response, next:NextFunction) =>{
    
    //manejo de errores
    let errors = validationResult(req)
    if(!errors.isEmpty()){
        res.status(400).json({errors:errors.array()})
    }
    next()
}