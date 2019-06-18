const app = require('../app');
const assert = require('assert');  // Node.js `assert` module
const fs = require('fs');
const should = require('chai').should();


// -- base
// -- mocha
// describe('App test!', function () {
//   it('sayHello should return "hello"', function () {
//     assert.equal(app.sayHello(), 'hello');
//   });
// });

// -- timeout 
// -- mocha -t 3000
// describe('App test1', function () {
//   it('async test', function (done) {
//     fs.readFile(__filename, done);
//   });
// });

// -- overlap, describe in describe
// -- mocha
// describe('# App test', function () {
//   describe('# sayHello', function () {
//     it('should return hello', function () {
//       app.sayHello().should.equal('hello');
//     });
//     it('should a string type', function () {
//       app.sayHello().should.be.a('string');
//     });
//   });

//   describe('# addNumbers', function () {
//     it('should greater than 5', function () {
//       app.addNumbers(3, 4).should.be.above(5);
//     });
//   });
// });

// -- hook
// -- mocha
// describe('App test!', function () {
//   before(function () {
//     console.log('before hook');
//   });
//   after(function () {
//     console.log('after hook');
//   });
//   beforeEach(function () {
//     console.log('beforeEach hook');
//   });
//   afterEach(function () {
//     console.log('afterEach hook');
//   });

//   it('A test', function () {
//     assert.equal(app.a(), 'A!');
//   });
//   it('B test', function () {
//     assert.equal(app.b(), 'B!');
//   });
// });