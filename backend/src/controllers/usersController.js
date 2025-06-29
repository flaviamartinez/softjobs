import { registerModel } from '../models/usersModel.js'
import { findUser } from '../middlewares/auth.middleware.js'

export const registerUser = async (req, res) => {
  try {
    const { email, password, rol, lenguage } = req.body
    if (await findUser(email)) {
      return res.status(401).json({ error: 'Usuario ya registrado' })
    } else {
      const user = await registerModel({ email, password, rol, lenguage })
      return res.status(201).json({ message: 'Usuario creado', user })
    }
  } catch (error) {
    console.error('Error in registerUser', error)
    return res.status(500).json({ error: 'Error al registrar usuario' })
  }
}

export const getUser = async (req, res) => {
  try {
    const user = req.user
    const { email, rol, lenguage } = await findUser(user)
    console.log({ email, rol, lenguage })
    return res.status(200).json([{ email, rol, lenguage }])
  } catch (error) {
    console.error('Error obteniendo al usuario')
    return res.status(500).json({ error: 'Error al obtener usuario' })
  }
}
