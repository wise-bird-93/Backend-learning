const express = require('express');
const hostRouter = express.Router();
const path = require('path');
const routePath = require('../utils/pathUtil');
const {getAddHome,postHome,getHomeDetails} = require('../controllers/hostController');
 

hostRouter.get("/host/admin", getAddHome);
hostRouter.post("/host/admin", postHome);
hostRouter.get("/viewHome/:homeId", getHomeDetails);

exports.hostRouter = hostRouter;
