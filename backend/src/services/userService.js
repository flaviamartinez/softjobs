import pool from '../../database/config.js'

export const findUser = async (email, includePassword = false) => {
  const fields = includePassword ? '*' : 'email, rol, lenguage'
  const query = {
    text: `SELECT ${fields} FROM usuarios WHERE email = $1`,
    values: [email]
  }
  const response = await pool.query(query)
  return response.rows[0]
}
