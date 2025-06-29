import express from 'express'
import 'dotenv/config'
import Routes from './routes/users.routes.js'
import cors from 'cors'
import { loggerMiddleware } from './src/middlewares/logger.middleware.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use(loggerMiddleware)
app.use(Routes)

const PORT = process.env.PORT ?? 3000

app.listen(PORT, console.log(`Server: http://localhost:${PORT}`))
