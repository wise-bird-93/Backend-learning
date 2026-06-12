const express = require('express');
const userRouter = express.Router();
const path = require('path');
const routePath = require('../utils/pathUtil');

userRouter.get("/",(req,res,next) => {
  res.sendFile(path.join(routePath,'views','home.html'));
});

module.exports = userRouter;