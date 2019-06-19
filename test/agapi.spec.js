const app = require('../app');
// var supertest = require("supertest");
// const should = require('chai').should();
// var server = supertest.agent("http://localhost:9671");
// const assert = require('assert');  // Node.js `assert` module

const conn = require('../data/connection.json')

let use = !true;
let req, res;
let describeName = 'Connection';
let itName = 'RemoveConnection';
// let itName = 'GetConnectionList';
req = {
  "ConnectionName": "test conneciton name"
};
res = {
  "Success": true
}

if ( !use ) return;
describe('Customize',function(){
  conn[describeName].forEach((data) => {
    if ( data.name == itName ) {
      it(itName, function (done) {
        let type = data.type;
        data.req = req === undefined ? data.req : req;
        data.res = res === undefined ? data.res : res;
        if( type == 'post' ) {
          app.post(done, data);
        } else if( type == 'get' ) {
          app.get(done, data);
        }
      });
    }
  });
});