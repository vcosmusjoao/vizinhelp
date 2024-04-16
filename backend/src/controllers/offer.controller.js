const db = require("../config/database");

exports.createOffer = async (req, res) => {
  try {
    // Extrair os dados da requisição
    const { title, image_url, cep, availability, category, capacity, requirements, description } = req.body;

    // Obter o ID do usuário do token decodificado
    const keycloakUserId = req.tokenData.sub;

    // Executar a consulta SQL para inserir a nova oferta
    const { rows } = await db.query(
      "INSERT INTO offers (keycloak_user_id, title, image_url, cep, availability, category, capacity, requirements, description) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *",
      [keycloakUserId, title, image_url, cep, availability, category, capacity, requirements, description]
    );

    // Enviar a resposta de sucesso com os dados da oferta criada
    res.status(201).json({
      message: "Offer added successfully!",
      offer: rows[0] // Primeira linha retornada pela consulta (dados da oferta criada)
    });
  } catch (error) {
    // Enviar uma resposta de erro em caso de falha
    console.error("Error creating offer:", error);
    res.status(500).json({ error: "Failed to create offer" });

  }
};


exports.getAllOffers = async (req, res) => {
  try {
      const { rows } = await db.query("SELECT * FROM offers");
      res.status(200).json(rows);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};

exports.getOfferById = async (req, res) => {
  try {
      const { id } = req.params;
      const { rows } = await db.query("SELECT * FROM offers WHERE offer_id = $1", [id]);
      if (rows.length === 0) {
          return res.status(404).json({ message: "Oferta não encontrada" });
      }
      res.status(200).json(rows[0]);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};

exports.getUserOffers = async (req, res) => {
  try {
    // Obter o ID do usuário atualmente autenticado
    const keycloakUserId = req.tokenData.sub;

    // Consulta para buscar as ofertas do usuário pelo ID do Keycloak
    const { rows } = await db.query("SELECT * FROM offers WHERE keycloak_user_id = $1", [keycloakUserId]);

    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};