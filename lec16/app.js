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
const {mongoConnect} = require('./utils/dataBaseUtil');



app.use(express.static(path.join(routePath,'public')));

app.use(express.urlencoded());
app.use(storeRouter);
app.use(hostRouter);

app.use(errorRoute);

const PORT = 3000;
mongoConnect(() => {
  app.listen(PORT , () => {
    console.log(`server running on ${PORT}`);
  });
})

