const { getOfferById } = require('../../controllers/offer.controller');
const db = require('../../config/database');

// Mock do objeto de requisição e resposta
const req = {
  params: { id: 1 }
};
const res = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn()
};

// Mock dos dados retornados pelo banco de dados
const mockOffer = {
  offer_id: 1,
  title: 'Oferta 1',
  availability: 'Disponível'
};

// Mock da função de consulta do banco de dados
db.query = jest.fn().mockResolvedValue({ rows: [mockOffer] });

describe('getOfferById', () => {
  it('deve retornar a oferta com o ID correspondente', async () => {
    await getOfferById(req, res);

    // Verifica se a função de consulta do banco de dados foi chamada corretamente
    expect(db.query).toHaveBeenCalledWith("SELECT * FROM offers WHERE offer_id = $1", [1]);

    // Verifica se a resposta HTTP retornada está de acordo com o esperado
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockOffer);
  });

  it('deve retornar uma resposta de erro se a oferta não for encontrada', async () => {
    // Mock da função de consulta do banco de dados retornando um array vazio
    db.query.mockResolvedValueOnce({ rows: [] });

    await getOfferById(req, res);

    // Verifica se a função de consulta do banco de dados foi chamada corretamente
    expect(db.query).toHaveBeenCalledWith("SELECT * FROM offers WHERE offer_id = $1", [1]);

    // Verifica se a resposta HTTP retornada está de acordo com o esperado
    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ message: "Oferta não encontrada" });
  });
});
