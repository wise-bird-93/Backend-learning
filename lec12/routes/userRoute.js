const express = require('express');
const userRouter = express.Router();
const path = require('path');
const routePath = require('../utils/pathUtil');
const {registeredHomes} = require('./hostRoute');

userRouter.get("/",(req,res,next) => {
  console.log(registeredHomes);
  res.render('home',{registeredHomes, pageTitle: 'airbnb home', currentPage: 'Home'});
});

exports.userRouter = userRouter;