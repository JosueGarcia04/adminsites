import {Router} from 'express'
const router = Router()

//sign in and auth

router.post('/auth/register', (req, res) => {
    console.log(req.body)
});

export default router