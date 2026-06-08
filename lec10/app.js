
const express = require('express');
const app = express();

app.use((req,res,next) => {
  console.log('Middleware 1',req.url);
  res.send('<h1>Hello World</h1>');
  next();
});

const PORT = 3000;
app.listen(PORT , () => {
  console.log(`Server is running on port ${PORT}`);
});