const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    // Verificar se o cabeçalho de autorização está presente
    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader || !authorizationHeader.startsWith("Bearer ")) {
      return res.status(401).json({ error: "Missing or invalid Authorization header" });
    }

    // Extrair o token do cabeçalho de autorização
    const token = authorizationHeader.split(" ")[1];

    // Decodificar o token JWT
    const tokenData = jwt.decode(token);

    // Armazenar os dados do token decodificado no objeto de solicitação (req)
    req.tokenData = tokenData;

    // Chamar o próximo middleware na cadeia
    next();
  } catch (error) {
    next(error);
  }
};