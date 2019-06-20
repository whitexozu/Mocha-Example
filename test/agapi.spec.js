const app = require('../app');
// var supertest = require("supertest");
// const should = require('chai').should();
// var server = supertest.agent("http://localhost:9671");
// const assert = require('assert');  // Node.js `assert` module

// const conn = require('../data/connection.json')
// const conn = require('../data/sequence.json')
const conn = require('../data/schema.json')

let use = true;
let req, res;
// let describeName = 'Connection';
// let describeName = 'Sequence';
let describeName = 'Schema';


// let itName = 'GetConnectionList';
// let itName = 'AddConnection';
// let itName = 'TestConnection';
// let itName = 'RemoveConnection';
// let itName = 'GetSequences';
// let itName = 'CreateSequence';

let itName = 'GetSchemaList (AgensGarph)';
// let itName = 'RemoveSchema (odbc)';
// let itName = 'RemoveSchema (AgensGarph - vertex)';
// let itName = 'RemoveSchema (AgensGarph - edge)';

// req = {
//   // "ConnectionName": "test connection name"
//   // "ConnectionName": "agens graph connection"
//   "ConnectionName": "pq"
// };
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