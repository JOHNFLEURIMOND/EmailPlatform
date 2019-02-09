const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();

app.use(bodyParser.json()); // get information from html forms
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
);

app.post('/api/form', (req, res) => {
  res.send(name, email, message),
  console.log(req.data);
});

const port = process.env.PORT || 7800;

app.listen(port, ()=> {
  console.log('Whatever is clever, quit never!' + port);
});
