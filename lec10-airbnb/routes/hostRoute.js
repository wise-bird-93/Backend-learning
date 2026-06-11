const express = require('express');
const hostRouter = express.Router();
const path = require('path');
const routePath = require('../utils/pathUtil');

hostRouter.get("/host/admin",(req,res,next) => {
  res.sendFile(path.join(routePath,'views','addhome.html'));
});

hostRouter.post("/host/admin",(req,res,next) => {
  console.log(req.body);
  res.sendFile(path.join(routePath,'views','homeadded.html'));
});

module.exports = hostRouter;