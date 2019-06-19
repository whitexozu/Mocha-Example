const app = require('../app');
const conn = require('../data/connection.json')
let describeName

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