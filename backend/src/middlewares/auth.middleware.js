import pool from '../../database/config.js'

export const findUser = async (email) => {
  const query = {
    text: 'SELECT * FROM usuarios WHERE email = $1',
    values: [email]
  }
  const response = await pool.query(query)
  return response.rows[0]
}
