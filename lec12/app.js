const express = require('express');
const app = express();
app.set('view engine','ejs');
app.set('views','views');

const path = require('path');

const {userRouter} = require('./routes/userRoute');
const {hostRouter} = require('./routes/hostRoute');
const routePath = require('./utils/pathUtil');

app.use(express.static(path.join(routePath,'public')));

app.use(express.urlencoded());
app.use(userRouter);
app.use(hostRouter);

app.use((req,res) => {
  res.status(404).render('404',{pageTitle: 'Page Not Found',currentPage: '404'});
});

const PORT = 3000;
app.listen(PORT , () => {
  console.log(`server running on ${PORT}`);
});