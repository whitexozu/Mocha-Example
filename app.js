var supertest = require("supertest");
const should = require('chai').should();
var server = supertest.agent("http://localhost:9671");
const assert = require('assert');  // Node.js `assert` module
const conn = require('./data/connection.json')

module.exports = {
  sayHello: function () {
    return 'hello';
  },
  addNumbers: function (a, b) {
    return a + b;
  },
  a: function () {
    return 'A!';
  },
  b: function () {
    return 'B!';
  },
  get: function(done, data) {
     server
      .get(data.url)
      .expect("Content-type",/json/)
      .expect(200) // THis is HTTP response
      .end(function(err,res){
        should.equal(err, null); 
        res.status.should.equal(200);
        // console.log('JSON.stringify', JSON.stringify(res.body));
        assert.equal(JSON.stringify(res.body), JSON.stringify(data.res));
        done();
      });
  },
  post: function(done, data) {
    server
     .post(data.url)
     .send(data.req)
     .expect("Content-type",/json/)
     .expect(200) // THis is HTTP response
     .end(function(err,res){
       should.equal(err, null); 
       res.status.should.equal(200);
       // console.log('JSON.stringify', JSON.stringify(res.body));
       assert.equal(JSON.stringify(res.body), JSON.stringify(data.res));
       done();
     });
  }
}
