const express = require('express');
const errorPage = express.Router();
const path = require('path');

errorPage.use((req,res,next) => {
  res.sendFile(path.join(__dirname,'../','views','404.html'));
})

module.exports = errorPage;