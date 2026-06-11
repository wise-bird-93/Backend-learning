const express = require('express');
const app = express();

const contactRoute = require('./routes/contact');
const errorPage = require('./routes/errorPage');
const homeRoute = require('./routes/home');

app.use(express.urlencoded());
app.use(homeRoute);
app.use(contactRoute);
app.use(errorPage);

const PORT = 3000;
app.listen(PORT , () => {
  console.log(`Server is running on port ${PORT}`);
});