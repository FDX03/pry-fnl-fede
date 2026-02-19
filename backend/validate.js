// validate.js
function validateProjectData(req, res, next) {
  const { name, description } = req.body;

  if (!name || typeof name !== "string" || name.trim().length === 0) {
    return res.status(400).json({ error: "El nombre del proyecto es obligatorio y debe ser texto" });
  }

  if (!description || typeof description !== "string" || description.trim().length === 0) {
    return res.status(400).json({ error: "La descripción del proyecto es obligatoria y debe ser texto" });
  }

  next(); // pasa al siguiente middleware o controlador
}

function validateProjectId(req, res, next) {
  const { id } = req.params;
  if (!id || isNaN(Number(id))) {
    return res.status(400).json({ error: "ID de proyecto inválido" });
  }
  next();
}

module.exports = {
  validateProjectData,
  validateProjectId,
};
