import bcrypt from 'bcryptjs'
import pool from '../../database/config.js'

export const registerModel = async ({ email, password, rol, lenguage }) => {
  const hashPassword = bcrypt.hashSync(password)
  const query = {
    text: 'INSERT INTO usuarios (email, password, rol, lenguage) VALUES ($1, $2, $3, $4) RETURNING email',
    values: [email, hashPassword, rol, lenguage]
  }

  const response = await pool.query(query)
  return response.rows
}
