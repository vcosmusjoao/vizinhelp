const { createOffer } = require('../../controllers/offer.controller');
const db = require('../../config/database');

// Mock do objeto de requisição e resposta
const req = {
  body: {
    title: 'Oferta de Teste',
    image_url: 'http://example.com/image.jpg',
    cep: '12345-678',
    availability: 'Disponível',
    category: 'Categoria Teste',
    capacity: 10,
    requirements: 'Requisitos Teste',
    description: 'Descrição da Oferta de Teste'
  },
  tokenData: { sub: 'keycloakUserId' } // Mock de dados do token decodificado
};
const res = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn()
};

// Mock do retorno do banco de dados para simular a inserção bem-sucedida de uma oferta
const mockInsertedOffer = {
  offer_id: 1,
  title: 'Oferta de Teste',
  image_url: 'http://example.com/image.jpg',
  cep: '12345-678',
  availability: 'Disponível',
  category: 'Categoria Teste',
  capacity: 10,
  requirements: 'Requisitos Teste',
  description: 'Descrição da Oferta de Teste',
  created_at: new Date()
};

// Mock da função de consulta do banco de dados para retornar os dados da oferta inserida
db.query = jest.fn().mockResolvedValue({ rows: [mockInsertedOffer] });

describe('createOffer', () => {
  it('deve criar uma nova oferta no banco de dados e retornar os dados da oferta criada', async () => {
    await createOffer(req, res);

    // Verifica se a função de consulta do banco de dados foi chamada corretamente
    expect(db.query).toHaveBeenCalledWith(
      "INSERT INTO offers (keycloak_user_id, title, image_url, cep, availability, category, capacity, requirements, description) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *",
      ['keycloakUserId', 'Oferta de Teste', 'http://example.com/image.jpg', '12345-678', 'Disponível', 'Categoria Teste', 10, 'Requisitos Teste', 'Descrição da Oferta de Teste']
    );

    // Verifica se a resposta HTTP retornada está de acordo com o esperado
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({
      message: "Offer added successfully!",
      offer: mockInsertedOffer
    });
  });

  it('deve retornar uma resposta de erro em caso de falha ao criar a oferta', async () => {
    // Mock de uma falha ao executar a consulta do banco de dados
    db.query.mockRejectedValue(new Error('Erro ao inserir oferta'));

    await createOffer(req, res);

    // Verifica se a função de consulta do banco de dados foi chamada corretamente
    expect(db.query).toHaveBeenCalled();

    // Verifica se a resposta HTTP retornada está de acordo com o esperado
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: "Failed to create offer" });
  });
});
