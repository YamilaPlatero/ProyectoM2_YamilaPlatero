const request = require('supertest');
const app = require('../app');

test('POST /api/posts sin title devuelve 400', async () => {
  const res = await request(app)
    .post('/api/posts')
    .send({
      content: 'Contenido',
      author_id: 1
    });

  expect(res.statusCode).toBe(400);
});

test('POST /api/posts sin content devuelve 400', async () => {
  const res = await request(app)
    .post('/api/posts')
    .send({
      title: 'Mi post',
      author_id: 1
    });

  expect(res.statusCode).toBe(400);
});

test('POST /api/posts sin author_id devuelve 400', async () => {
  const res = await request(app)
    .post('/api/posts')
    .send({
      title: 'Mi post',
      content: 'Contenido'
    });

  expect(res.statusCode).toBe(400);
});