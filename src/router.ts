import {Router} from 'express'
import { createAccount } from './handlers';
const router = Router()

//sign in and auth

router.post('/auth/register', createAccount );

export default router