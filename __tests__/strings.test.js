const request = require('supertest');
const app = require('../src/app');

describe('/strings', () => {
  describe('GET /hello/{string}', () => {
    it('returns "Hello world!" when passed "world"', done => {
      request(app)
        .get('/strings/hello/world')
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: 'Hello, world!' });
          done();
        });
    });
  });

  describe('GET /upper/{string}', () => {
    it('returns the uppercased string', done => {
      request(app)
        .get('/strings/upper/hello')
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: 'HELLO' });
          done();
        });
    });
    it('returns the uppercased string', done => {
      request(app)
        .get('/strings/upper/turtle')
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: 'TURTLE' });
          done();
        });
    });
  });

  describe('GET /lower/{string}', () => {
    it('returns the lowercased string', done => {
      request(app)
        .get('/strings/lower/HELLO')
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: 'hello' });
          done();
        });
    });
    it('returns the lowercased string', done => {
      request(app)
        .get('/strings/lower/TURTLE')
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: 'turtle' });
          done();
        });
    });
  });

  describe('GET /count-characters/{string}', () => {
    it('returns the length of characters of the string', done => {
      request(app)
        .get('/strings/count-characters/hello')
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: '5' });
          done();
        });
    });

    it('returns the length of characters of the string', done => {
      request(app)
        .get('/strings/count-characters/turtle')
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: '6' });
          done();
        });
    });
  });

  describe('GET /first-characters/{string}', () => {
    it('returns the first character of the string when there is no query string', done => {
      request(app)
        .get('/strings/first-characters/hello')
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: 'h' });
          done();
        });
    });

    it('returns the first character of the string when there is no query string', done => {
      request(app)
        .get('/strings/first-characters/turtle')
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: 't' });
          done();
        });
    });

    it('returns the first n character of the string when passed a query parameter', done => {
      request(app)
        .get('/strings/first-characters/sd32fg45')
        .query({ length: 4 })
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: 'sd32' });
          done();
        });
    });

    it('returns the first n character of the string when passed a query parameter', done => {
      request(app)
        .get('/strings/first-characters/hsfghsfgh')
        .query({ length: 7 })
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: 'hsfghsf' });
          done();
        });
    });
  });
});
