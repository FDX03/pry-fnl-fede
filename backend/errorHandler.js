// errorHandler.js
function errorHandler(err, req, res, next) {
  console.error("💥 ERROR:", err.message); // log para debugging
  console.error(err.stack);

  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    success: false,
    message: err.message || "Error interno del servidor",
  });
}

module.exports = errorHandler;
