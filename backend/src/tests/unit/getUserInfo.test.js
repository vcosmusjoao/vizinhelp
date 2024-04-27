const { getUserInfo } = require('../../controllers/user.controller');

// Mock do objeto de requisição e resposta
const req = {
  tokenData: {
    name: 'John Doe',
    preferred_username: 'johndoe',
    given_name: 'John',
    family_name: 'Doe',
    email: 'johndoe@example.com'
  }
};
const res = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn()
};

describe('getUserInfo', () => {
  it('deve retornar as informações do usuário com base no token decodificado', async () => {
    await getUserInfo(req, res);

    // Verifica se a resposta HTTP retornada está de acordo com o esperado
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      name: 'John Doe',
      username: 'johndoe',
      givenName: 'John',
      familyName: 'Doe',
      email: 'johndoe@example.com'
    });
  });
});
