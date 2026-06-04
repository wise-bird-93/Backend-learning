
const http = require('http');
const val = http.createServer((req,res)  => {
  console.log(req);
});
val.listen(3000);