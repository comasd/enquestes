var request = require('supertest');
var app = require('../app.js');
 
describe('GET /', function() {
  it('respon amb Hola UOC!', function(done) {
    request(app).get('/').expect('Hola UOC!', done);
  });
});