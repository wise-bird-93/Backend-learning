const http = require('http');

const val = http.createServer((req,res) => {
  console.log(req.url , req.method);
  
  res.setHeader('Content-type' , 'text/html');
  res.write('<html>');
  res.write('<head><title> Myntra </title></head>');
  res.write('<body>');

  if(req.url === '/') {
    res.write('<h1> Welcome to Myntra </h1><br><br>');
    res.write('<p> Please select your category </p><br>');
    res.write('<ul>');
    res.write('<li><a href="/home"> Home </a></li>');
    res.write('<li><a href="/men"> Men </a></li>');
    res.write('<li><a href="/women"> Women </a></li>');
    res.write('<li><a href="/kids"> Kids </a></li>');
    res.write('<li><a href="/cart"> Cart </a></li>');
    res.write('</ul>');
  }
  else if(req.url === '/home') {
    res.write('<h1> Welcome to Home </h1>');
    return res.end();
  }
  else if(req.url === '/men') {
    res.write('<h1> Welcome to Men </h1>');
    return res.end();
  }
  else if(req.url === '/women') {
    res.write('<h1> Welcome to Women </h1>');
    return res.end();
  }
  else if(req.url === '/kids') {
    res.write('<h1> Welcome to Kids </h1>');
    return res.end();
  }
  else if(req.url === '/cart') {
    res.write('<h1> Welcome to Cart </h1>');
    return res.end();
  }
  
  res.write('</body>');
  res.write('</html>');
  res.end();
});

val.listen(10);