const express = require('express');
const hostRouter = express.Router();
const path = require('path');
const routePath = require('../utils/pathUtil');
const {getAddHome} = require('../controllers/hostController');
const {postHome} = require('../controllers/hostController')

hostRouter.get("/host/admin", getAddHome);
hostRouter.post("/host/admin", postHome);

exports.hostRouter = hostRouter;
