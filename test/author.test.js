const request = require('supertest');
const app = require('../app');

test('POST /api/authors crea un autor', async () => {
  const res = await request(app)
    .post('/api/authors')
    .send({
      name: 'Juan',
      email: `juan${Date.now()}@gmail.com`
    });

  expect(res.statusCode).toBe(201);
  expect(res.body).toHaveProperty('id');
});

test('POST /api/authors crea un autor', async () => {
  const res = await request(app)
    .post('/api/authors')
    .send({
      name: 'Juan',
      email: `juan${Date.now()}@gmail.com`
    });

  expect(res.statusCode).toBe(201);
  expect(res.body).toHaveProperty('id');
});

test('POST /api/authors sin nombre devuelve 400', async () => {
  const res = await request(app)
    .post('/api/authors')
    .send({
      email: 'juan@gmail.com'
    });

  expect(res.statusCode).toBe(400);
  expect(res.body.error).toBe('El nombre es obligatorio');
});

test('POST /api/authors sin nombre devuelve 400', async () => {
  const res = await request(app)
    .post('/api/authors')
    .send({
      email: 'juan@gmail.com'
    });

  expect(res.statusCode).toBe(400);
  expect(res.body.error).toBe('El nombre es obligatorio');
});

test('POST /api/authors devuelve 409 si el email ya existe', async () => {

  const email = `duplicado${Date.now()}@gmail.com`;

  await request(app)
    .post('/api/authors')
    .send({
      name: 'Juan',
      email
    });

  const res = await request(app)
    .post('/api/authors')
    .send({
      name: 'Pedro',
      email
    });

  expect(res.statusCode).toBe(409);
});