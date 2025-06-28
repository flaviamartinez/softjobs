import { registerModel, findUserModel } from '../models/usersModel.js'

export const registerUser = async (req, res) => {
  try {
    const { email, password, rol, lenguage } = req.body
    if (await findUserModel(email)) {
      res.status(401).json({ error: 'Usuario ya registrado' })
    } else {
      const user = await registerModel({ email, password, rol, lenguage })
      res.status(201).json({ message: 'Usuario creado', user })
    }
  } catch (error) {
    console.error('Error in registerUser', error)
    res.status(500).json({ error: 'Error al registrar usuario' })
  }
}
