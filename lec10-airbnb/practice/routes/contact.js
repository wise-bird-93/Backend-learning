const express = require('express');
const contactRoute = express.Router();
const path = require('path');


contactRoute.get("/contact-us",(req,res,next) => {
  res.sendFile(path.join(__dirname,'../','views','contact.html'));
});

contactRoute.post("/contact-us",(req,res,next) => {
  console.log(req.body);
  res.sendFile(path.join(__dirname,'../','views','submit.html'));
});

module.exports = contactRoute;