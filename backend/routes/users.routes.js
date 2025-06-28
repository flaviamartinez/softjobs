import { Router } from 'express'
import { registerUser } from '../src/controllers/usersController.js'

const router = Router()

router.post('/usuarios', registerUser)

export default router
