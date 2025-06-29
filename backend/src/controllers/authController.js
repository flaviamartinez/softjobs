import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import 'dotenv/config'

export const authUser = async (req, res) => {
  try {
    const { email, password } = req.body
    const hashedPassword = req.user.password
    delete req.user.password
    const isPasswordValid = bcrypt.compareSync(password, hashedPassword)

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'No autorizado' })
    }

    const token = jwt.sign({ email }, process.env.JWT_SECRET)
    res.status(200).json({ token })
  } catch (error) {
    return res.status(500).json({ error: 'Error al autorizar' })
  }
}
