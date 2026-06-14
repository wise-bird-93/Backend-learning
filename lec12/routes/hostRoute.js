const express = require('express');
const hostRouter = express.Router();
const path = require('path');
const routePath = require('../utils/pathUtil');

hostRouter.get("/host/admin",(req,res,next) => {
  res.render('addhome',{pageTitle: 'Add Home to airbnb',currentPage: 'addHome'});
});

const registeredHomes = [];

hostRouter.post("/host/admin",(req,res,next) => {
  console.log(req.body);
  registeredHomes.push(req.body);
  res.render('homeAdded',{pageTitle: 'Home added successfully',currentPage: 'HomeAdded'});
});

exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;