const fs = require('fs');

const resulthandle = (req,res) => {
  const arr = [];
      req.on('data' , chunk => {
        arr.push(chunk);
      });

      req.on('end' , () => {
        const data = Buffer.concat(arr).toString();
        const params = new URLSearchParams(data);
        const result = Object.fromEntries(params.entries());
        const sum = Number(result.num1) + Number(result.num2);
         fs.writeFileSync('result.txt' , result.num1 + ' + ' + result.num2 + ' = ' + sum);
        res.write(`
          <html>
          <body>
            <h1>Result: ${sum}</h1>
          </body>
          </html>
        `);
        res.end();
      });
}

exports.resulthandle = resulthandle;