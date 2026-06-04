const temp = require('http');

function requestListner(req,res) {
  console.log(req);
}

const server = temp.createServer(requestListner);
server.listen(3000);