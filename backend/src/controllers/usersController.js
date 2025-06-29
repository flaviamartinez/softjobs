import { registerModel } from '../models/usersModel.js'
import { findUser } from '../services/userService.js'

export const registerUser = async (req, res) => {
  try {
    const { email, password, rol, lenguage } = req.body
    const user = await registerModel({ email, password, rol, lenguage })
    return res.status(201).json({ message: 'Usuario creado', user })
  } catch (error) {
    console.error('Error creando usuario', error)
    return res.status(500).json({ error: 'Error al crear usuario' })
  }
}

export const getUser = async (req, res) => {
  try {
    const user = req.user
    const { email, rol, lenguage } = await findUser(user)
    return res.status(200).json([{ email, rol, lenguage }])
  } catch (error) {
    console.error('Error obteniendo al usuario')
    return res.status(500).json({ error: 'Error al obtener usuario' })
  }
}
