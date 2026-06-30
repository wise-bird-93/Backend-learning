require('dotenv').config();

const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const express = require('express');
const app = express();
app.set('view engine','ejs');
app.set('views','views');

const path = require('path');

const {storeRouter} = require('./routes/storeRoute');
const {hostRouter} = require('./routes/hostRoute');
const routePath = require('./utils/pathUtil');
const {errorRoute} = require('./controllers/error');
const { default: mongoose } = require("mongoose");



app.use(express.static(path.join(routePath,'public')));

app.use(express.urlencoded());
app.use(storeRouter);
app.use(hostRouter);

app.use(errorRoute);

const db_path = "mongodb+srv://chatappuser:yuvi1290@cluster0.jsv13mb.mongodb.net/airbnb?appName=Cluster0";

const PORT = 3000;

mongoose.connect(process.env.db_path).then(() => {
  console.log('Connected to Mongoose');
  app.listen(PORT , () => {
    console.log(`server running on ${PORT}`);
  });
}).catch(err => {
  console.log('Error while connecting to mongoose',err);
});

