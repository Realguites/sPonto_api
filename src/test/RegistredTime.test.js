import app from '../src/app';
import request from 'supertest';

let rt;

beforeEach(() => {
    rt = {
        user: [{
            id: 1,
            email: 'guilherme.tes@gmail.com',
            name: 'Guilherme Tessmann'
        }],
        timeRegistred: '2021-05-31 13:54:51'
    }
});

test('Administrador não pode bater ponto.', async() => {
    const response = await request(app)
        .post('/registredTime')
        .send(rt);

    expect(response.status).toBe(406);
})

//gitmoji
//gitflow