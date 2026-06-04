const fs = require('fs');
const {input} = require('./input');
const {resulthandle} = require('./resulthandle');

const http = require('http');
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    if(req.url === '/') {
      res.write(`
        <html> 
          <body>
            <h1>Welcome User</h1>
            <a href="/calculator">Go to Calculator</a>
          </body>
        </html>`
      );
      return res.end(); 
    }

    else if(req.url === '/calculator') {
      return input(req,res);
      
    }  

    else if(req.url === '/calculator-result' && req.method === 'POST') {
      return resulthandle(req,res);
    }
});
server.listen(3000); 