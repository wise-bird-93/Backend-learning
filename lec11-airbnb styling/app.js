const express = require('express');
const app = express();
const path = require('path');

const userRouter = require('./routes/userRoute');
const hostRouter = require('./routes/hostRoute');
const routePath = require('./utils/pathUtil');

app.use(express.static(path.join(routePath,'public')));

app.use(express.urlencoded());
app.use(userRouter);
app.use(hostRouter);

app.use((req,res) => {
  res.sendFile(path.join(routePath,'views','404.html'));
});

const PORT = 3000;
app.listen(PORT , () => {
  console.log(`server running on ${PORT}`);
});