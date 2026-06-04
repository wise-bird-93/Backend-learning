
const http = require('http');
const val = http.createServer((req,res)  => {
  console.log(req.url , req.method , req.headers);

  res.setHeader('Content-Type' , 'text/html');
  res.write('<html>');
  res.write('<head><title>Node</title></head>');
  res.write('<body><h1> Personal Details </h1></body>')
  res.write('<form action="/details" method="POST">');
  res.write('<input type="text" id="name" name="name" placeholder="write your name here"><br>');
  res.write('<label> Gender:</label>');
  res.write('<input type="radio" id="male" name="male" value="male">');
  res.write('<label>male</label>');
  res.write('<input type="radio" id="female" name="female" value="female">');
  res.write('<label>female</label>');
  res.write('<input type="radio" id="other" name="other" value="other">');
  res.write('<label>other</label><br>');
  res.write('<button type="submit"> Submit </button>');
  res.write('</form>');
  res.write('</html>');
  res.end();
});

val.listen(3000);