const express = require('express');
const app = express();

app.use((req,res,next) => {
  console.log(req.path);
  next();
});

app.use((req,res,next) => {
  console.log(req.method);
  next();
});

app.get('/', (req,res,next) => {
  res.send('<h1>Welcome to Home page</h1>');
});


// app.use((req,res,next) => {
//   console.log('middleware-3' , req.method);
//   res.send('<h1>Hello World</h1>');
// });


app.get('/contact-us', (req,res,next) => {
  // res.write('<h1>Welcome to Contact Us page</h1>');
  res.send(`
    <html>
      <head>
        <title>Contact Us</title>
      </head>
      <body>
        <h1>Contact Us</h1>
        <form action="/contact-us" method="POST">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required>
          <br><br>
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required>
          <br><br>
          <label for="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
          <br><br>
          <input type="submit" value="Submit">
        </form>
      </body>
    </html>
  `);
});

app.post('/contact-us', (req,res,next) => {
  res.send('<h1>Form submitted successfully</h1>');
});

const PORT = 3000;
app.listen(PORT , () => {
  console.log(`Server is running on port ${PORT}`);
})