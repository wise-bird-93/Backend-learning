const http = require('http');
function input(req,res) {
  res.write(`
          <html>
          <body>
            <h1>Calculator</h1>
            <form action="/calculator-result" method="POST">
              <input type="number" name="num1" placeholder="Enter first number">
              <input type="number" name="num2" placeholder="Enter second number">
              <button type="submit">Sum</button>
            </form>
          </body>
          </html>
  `);
  return res.end();
}
exports.input = input;