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
const {authRoute} = require('./routes/authRoute');
const routePath = require('./utils/pathUtil');
const {errorRoute} = require('./controllers/error');
const { default: mongoose } = require("mongoose");

const session = require('express-session');

app.use(express.static(path.join(routePath,'public')));

app.use(express.urlencoded());

const MongoDbStore = require('connect-mongodb-session')(session);
const db_path = "mongodb+srv://chatappuser:yuvi1290@cluster0.jsv13mb.mongodb.net/airbnb?appName=Cluster0";
const store = new MongoDbStore({
  uri: process.env.db_path,
  collection: 'sessions'
})

app.use(session ({
  secret: "yuvraj",
  resave: false,
  saveUninitialized: true,
  store
}))

app.use((req,res,next) => {
  req.isLoggedIn = req.session.isLoggedIn;
  next();
})

app.use(storeRouter);
app.use(hostRouter);
app.use(authRoute);
app.use(errorRoute);

app.use("/", (req,res,next) => {
  if(req.isLoggedIn){
    next();
  }
  else {
    res.redirect("/login");
  }
})

const PORT = 3000;

mongoose.connect(process.env.db_path).then(() => {
  console.log('Connected to Mongoose');
  app.listen(PORT , () => {
    console.log(`server running on ${PORT}`);
  });
}).catch(err => {
  console.log('Error while connecting to mongoose',err);
});

