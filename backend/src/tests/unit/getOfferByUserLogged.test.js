const { getUserOffers } = require('../../controllers/offer.controller');
const db = require('../../config/database');

// Mock do objeto de requisição e resposta
const req = {
  tokenData: { sub: 'keycloakUserId' } // Mock de dados do token decodificado
};
const res = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn()
};

// Mock do retorno do banco de dados para simular a consulta bem-sucedida de ofertas por usuário
const mockOffers = [
  {
    offer_id: 1,
    title: 'Oferta 1',
    image_url: 'http://example.com/image1.jpg',
    cep: '12345-678',
    availability: 'Disponível',
    category: 'Categoria 1',
    capacity: 10,
    requirements: 'Requisitos 1',
    description: 'Descrição da Oferta 1',
    created_at: new Date()
  },
  {
    offer_id: 2,
    title: 'Oferta 2',
    image_url: 'http://example.com/image2.jpg',
    cep: '98765-432',
    availability: 'Indisponível',
    category: 'Categoria 2',
    capacity: 5,
    requirements: 'Requisitos 2',
    description: 'Descrição da Oferta 2',
    created_at: new Date()
  }
];

// Mock da função de consulta do banco de dados para retornar as ofertas do usuário
db.query = jest.fn().mockResolvedValue({ rows: mockOffers });

describe('getOfferByUserLogged', () => {
  it('deve retornar as ofertas do usuário logado', async () => {
    await getUserOffers(req, res);

    // Verifica se a função de consulta do banco de dados foi chamada corretamente
    expect(db.query).toHaveBeenCalledWith("SELECT * FROM offers WHERE keycloak_user_id = $1", ['keycloakUserId']);

    // Verifica se a resposta HTTP retornada está de acordo com o esperado
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockOffers);
  });

  it('deve retornar uma resposta de erro em caso de falha ao buscar as ofertas do usuário', async () => {
    // Mock de uma falha ao executar a consulta do banco de dados
    db.query.mockRejectedValue(new Error('Erro ao buscar ofertas do usuário'));

    await getUserOffers(req, res);

    // Verifica se a função de consulta do banco de dados foi chamada corretamente
    expect(db.query).toHaveBeenCalled();

    // Verifica se a resposta HTTP retornada está de acordo com o esperado
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: "Erro ao buscar ofertas do usuário" });
  });
});
