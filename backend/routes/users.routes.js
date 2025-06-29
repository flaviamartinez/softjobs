import { Router } from 'express'
import { registerUser, getUser } from '../src/controllers/usersController.js'
import { authUser } from '../src/controllers/authController.js'
import { verifyToken } from '../src/middlewares/token.middleware.js'
import { checkUserForLogin, checkUserForRegister } from '../src/middlewares/auth.middleware.js'

const router = Router()

router.post('/usuarios', checkUserForRegister, registerUser)
router.post('/login', checkUserForLogin, authUser)
router.get('/usuarios', verifyToken, getUser)

export default router
