const express = require('express');
const homeRoute = express.Router();
const path = require('path');

homeRoute.get("/",(req,res,next) => {
  res.sendFile(path.join(__dirname,'../','views','home.html'));
});

module.exports = homeRoute;