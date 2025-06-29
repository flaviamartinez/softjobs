export const loggerMiddleware = (req, res, next) => {
  const now = new Date().toISOString()
  const { method, originalUrl } = req
  console.log(`[${now}] ${method} ${originalUrl}`)
  next()
}
