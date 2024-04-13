const db = require("../config/database");

exports.createOffer = async (req, res) => {
  try {
    // Extrair os dados da requisição
    const { title, imageUrl, location, availability, category, capacity, requirements, description } = req.body;

    // Obter o ID do usuário do token decodificado
    const userkeycloak = req.tokenData.sub;

    const { rows: userRows } = await db.query(
      "SELECT user_id FROM users WHERE keycloak_user_id = $1",
      [userkeycloak]
    );


      if (userRows.length === 0) {
        // Se o usuário não for encontrado, você pode tratar o erro aqui
        return res.status(404).send({ message: "User not found" });
      }

    const useridEntity = userRows[0].user_id;
    // Executar a consulta SQL para inserir a nova oferta
    const { rows } = await db.query(
      "INSERT INTO offers (user_id, title, image_url, location, availability, category, capacity, requirements, description) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *",
      [useridEntity, title, imageUrl, location, availability, category, capacity, requirements, description]
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
      const userkeycloak = req.tokenData.sub;

      const { rows: userRows } = await db.query(
        "SELECT user_id FROM users WHERE keycloak_user_id = $1",
        [userkeycloak]
      );
      
      if (userRows.length === 0) {
        // Se o usuário não for encontrado, você pode tratar o erro aqui
        return res.status(404).send({ message: "User not found" });
      }

      const useridEntity = userRows[0].user_id;


      // Consulta para buscar as ofertas do usuário pelo ID
      const { rows } = await db.query("SELECT * FROM offers WHERE user_id = $1", [useridEntity]);

      res.status(200).json(rows);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};