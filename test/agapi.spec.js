const app = require('../app');
// var supertest = require("supertest");
// const should = require('chai').should();
// var server = supertest.agent("http://localhost:9671");
// const assert = require('assert');  // Node.js `assert` module
const conn = require('../data/connection.json')
let describeName

describeName = 'Version';
describe(describeName,function(){
  conn[describeName].forEach((data) => {
    it(data.name, function (done) {
      app.get(done, data);
    });
  });
});

describeName = 'Connection';
describe(describeName,function(){
  conn[describeName].forEach((data) => {
    it(data.name, function (done) {
      let type = data.type;
      if( type == 'post' ) {
        app.post(done, data);
      } else if( type == 'get' ) {
        app.get(done, data);
      }
    });
  });
});