const db = require("../config/database");
const nodemailer = require('nodemailer');

const { Offer } = require("../models/offer");

exports.createOffer = async (req, res) => {
  try {
    // Extrair os dados da requisição
    const newOffer = new Offer(req.body);

    // Obter o ID do usuário do token decodificado
    const keycloakUserId = req.tokenData.sub;

    // Executar a consulta SQL para inserir a nova oferta
    const { rows } = await db.query(
      "INSERT INTO offers (keycloak_user_id, title, image_url, cep, availability, category, capacity, requirements, description) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *",
      [keycloakUserId, newOffer.title, newOffer.image_url, newOffer.cep, newOffer.availability, newOffer.category, newOffer.capacity, newOffer.requirements, newOffer.description]
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
      const offersDTO = rows.map(offer=> new Offer(offer));
      res.status(200).json(offersDTO);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};

exports.getOfferById = async (req, res) => {
  try {
      const { id } = req.params;
      const { rows } = await db.query("SELECT * FROM offers WHERE C = $1", [id]);
      const offersDTO = rows.map(offer=> new Offer(offer));
      if (offersDTO.length === 0) {
          return res.status(404).json({ message: "Oferta não encontrada" });
      }

      res.status(200).json(offersDTO[0]);
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
    const offersDTO = rows.map(offer=> new Offer(offer));
    res.status(200).json(offersDTO);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.sendInterestEmail = async (req, res) => {
  try {
    const { name, email, message, offerId } = req.body;

    const { rows } = await db.query(
      "SELECT email FROM user_entity WHERE id = (SELECT keycloak_user_id FROM offers WHERE offer_id = $1)",
      [offerId]
    );

    const recipientEmail = rows[0].email;

    // Configuração do e-mail
    const transporter = nodemailer.createTransport({
      // Configure conforme os detalhes do seu provedor de e-mail
      service: 'gmail',
      auth: {
        user: 'vizinhelp@gmail.com',
        pass: process.env.PASSWORD_SENDER
      }
    });

    const mailOptions = {
      from: 'vizinhelp@gmail.com',
      to: recipientEmail,
      subject: 'Interesse na sua oferta',
      text: `Nome: ${name}\nE-mail: ${email}\nMensagem: ${message}`
    };

    // Envio do e-mail
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        res.status(500).send('Erro ao enviar e-mail');
      } else {
        console.log('E-mail enviado: ' + info.response);
        res.status(200).send('E-mail enviado com sucesso');
      }
    });
  } catch (error) {
    console.error("Error sending interest email:", error);
    res.status(500).json({ error: "Failed to send interest email" });
  }
};