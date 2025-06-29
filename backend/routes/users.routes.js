import { Router } from 'express'
import { registerUser, getUser } from '../src/controllers/usersController.js'
import { authUser } from '../src/controllers/authController.js'
import { verifyToken } from '../src/middlewares/token.middleware.js'

const router = Router()

router.post('/usuarios', registerUser)
router.post('/login', authUser)
router.get('/usuarios', verifyToken, getUser)

export default router
