function globalErrorHandler(err, req, res, next) {
// logging stub — replace with winston or pino
console.error(err);
const status = err.status || 500;
res.status(status).json({ message: err.message || 'Internal Server Error' });
}


module.exports = { globalErrorHandler };