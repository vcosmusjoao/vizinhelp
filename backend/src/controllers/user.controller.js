const { User } = require("../models/user");

exports.getUserInfo = async (req, res) => {
    try {
      // Obter as informações do usuário do token decodificado
      const userInfo = req.tokenData;
      const user = new User(userInfo);
      // Enviar as informações do usuário na resposta
      res.status(200).json(user);
    } catch (error) {
      // Enviar uma resposta de erro em caso de falha
      console.error("Error getting user info:", error);
      res.status(500).json({ error: "Failed to get user info" });
    }
  };