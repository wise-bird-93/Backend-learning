const express = require('express');
const authRoute = express.Router();

const {getLogin, postLogin, postLogout} = require('../controllers/authController')

authRoute.get("/login", getLogin);
authRoute.post("/login", postLogin);
authRoute.post("/logout", postLogout);

exports.authRoute = authRoute;