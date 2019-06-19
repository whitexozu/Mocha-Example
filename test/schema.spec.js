const app = require('../app');
const conn = require('../data/schema.json')
let describeName

describeName = 'Schema';

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