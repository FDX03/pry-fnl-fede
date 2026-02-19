const jwt = require("jsonwebtoken");
const roles = require("./roles");
const SECRET_KEY = "TU_SECRETO_JWT";

function authorize(requiredPermission) {
  return (req, res, next) => {
    const authHeader = req.headers["authorization"];
    if (!authHeader) return res.status(401).json({ message: "No token proporcionado" });

    const token = authHeader.split(" ")[1]; // "Bearer TOKEN"

    jwt.verify(token, SECRET_KEY, (err, decoded) => {
      if (err) return res.status(403).json({ message: "Token inválido" });

      req.user = decoded;

      const userRole = roles[decoded.role];
      if (!userRole) return res.status(403).json({ message: "Rol no encontrado" });

      if (!userRole.can.includes(requiredPermission)) {
        return res.status(403).json({ message: "Permiso denegado" });
      }

      next();
    });
  };
}

module.exports = authorize;
