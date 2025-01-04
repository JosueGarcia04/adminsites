import {Router} from 'express'
import {body} from 'express-validator'
import { createAccount } from './handlers';
const router = Router()

//sign in and auth

router.post('/auth/register',
    body('handle').notEmpty().withMessage('el handle no puede ir vacio '),
    body('name').notEmpty().withMessage('el nombre no puede ir vacio '), 
    body('email').isEmail().withMessage('email incorrecto '), 
    body('password').isLength({min: 8, max: 16}).withMessage('contraseña incorrecta'), 
    createAccount );

export default router