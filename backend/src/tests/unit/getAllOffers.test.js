const { getAllOffers } = require('../../controllers/offer.controller');
const db = require('../../config/database');

// Mock do objeto de requisição e resposta
const req = {};
const res = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn()
};

// Mock dos dados retornados pelo banco de dados
const mockOffers = [
  { offer_id: 1, title: 'Oferta 1', availability: 'Disponível' },
  { offer_id: 2, title: 'Oferta 2', availability: 'Indisponível' }
];

// Mock da função de consulta do banco de dados
db.query = jest.fn().mockResolvedValue({ rows: mockOffers });

describe('getAllOffers', () => {
  afterEach(() => {
    jest.clearAllMocks(); // Limpa todos os mocks após cada teste
  });

  it('deve retornar todas as ofertas do banco de dados', async () => {
    await getAllOffers(req, res);

    // Verifica se a função de consulta do banco de dados foi chamada corretamente
    expect(db.query).toHaveBeenCalledWith("SELECT * FROM offers");

    // Verifica se a resposta HTTP retornada está de acordo com o esperado
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockOffers);
  });

  it('deve retornar uma resposta de erro em caso de falha ao recuperar as ofertas', async () => {
    // Mock de uma falha ao executar a consulta do banco de dados
    db.query.mockRejectedValue(new Error('Erro ao recuperar ofertas'));

    await getAllOffers(req, res);

    // Verifica se a função de consulta do banco de dados foi chamada corretamente
    expect(db.query).toHaveBeenCalled();

    // Verifica se a resposta HTTP retornada está de acordo com o esperado
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: "Erro ao recuperar ofertas" });
  });
});


