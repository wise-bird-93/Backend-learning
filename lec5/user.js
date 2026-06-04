const fs = require('fs');
const http = require('http');
const requestHandler = http.createServer((req,res)  => {
  console.log(req.url , req.method);

  res.setHeader('Content-Type' , 'text/html');
  res.write('<html>');
  res.write('<head><title>Node</title></head>');
  res.write('<body><h1> Personal Details </h1></body>')
  res.write('<form action="/details" method="POST">');
  res.write('<input type="text" id="name" name="name" placeholder="write your name here"><br>');
  res.write('<label> Gender:</label>');
  res.write('<input type="radio" id="male" name="gender" value="male">');
  res.write('<label>male</label>');
  res.write('<input type="radio" id="female" name="gender" value="female">');
  res.write('<label>female</label>');
  res.write('<input type="radio" id="other" name="gender" value="other">');
  res.write('<label>other</label><br>');
  res.write('<button type="submit"> Submit </button>');
  res.write('</form>');
  res.write('</html>');

  if(req.url === '/details' && req.method === 'POST') {
    const arr = [];
    req.on('data' , chunks => {
      arr.push(chunks);
    });

    req.on('end' , () => {
      const data = Buffer.concat(arr).toString();
      const params = new URLSearchParams(data);
      const actualData = Object.fromEntries(params.entries());
      fs.writeFileSync('data.txt' , JSON.stringify(actualData));
    });
  }
  res.end();
});

module.exports = requestHandler;