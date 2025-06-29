import { findUser } from '../services/userService.js'

export const checkUserForLogin = async (req, res, next) => {
  try {
    const { email } = req.body
    if (!email) {
      return res.status(400).json({ message: 'El email es requerido' })
    }

    const user = await findUser(email, true)

    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' })
    }

    req.user = user
    next()
  } catch (error) {
    console.error('Error verificando el usuario:', error)
    res.status(500).json({ message: 'Error interno del servidor' })
  }
}

export const checkUserForRegister = async (req, res, next) => {
  try {
    const { email } = req.body
    if (!email) {
      return res.status(400).json({ message: 'El email es requerido' })
    }

    const user = await findUser(email)

    if (user) {
      return res.status(409).json({ message: 'Ya existe usuario con este email' })
    }

    next()
  } catch (error) {
    console.error('Error verificando el usuario:', error)
    res.status(500).json({ message: 'Error interno del servidor' })
  }
}
