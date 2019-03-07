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
if (process.env.NODE_ENV === 'production') {
  // Exprees will serve up production assets
  app.use(express.static('client/build'));

  // Express serve up index.html file if it doesn't recognize route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  });
}

app.post('/api/form', (req, res) => {
  nodemailer.createTestAccount((err, account) => {
    const htmlEmail = `
     <h3> Contact Details</h3>
     <ul>
       <li>Name: ${req.body.name}<li>
       <li>Email: ${req.body.email}<li>
     </ul>

     <h3>Message</h3>
     <p> ${req.body.message}</p>
    `;

    let transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'er5ad6235x33lk5h@ethereal.email', // generated ethereal user
        pass: 'tDfy44XDsmagffG3EE', // generated ethereal password
      },
    });

    // setup email data with unicode symbols
    let mailOptions = {
      from: 'test@testBoston.com', // sender address
      to: 'er5ad6235x33lk5h@ethereal.email', // list of receivers
      subject: 'Hello ✔', // Subject line
      text: req.body.comments, // plain text body
      html: htmlEmail, // html body
    };
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        return console.log(err);
      }

      console.log('Message sent: %s', info.message);
      console.log('Message URL: %s', nodemailer.getTestMessage(info));
    });
  });
});

const port = process.env.PORT;

app.listen(port, () => {
  console.log('Whatever is clever, quit never!' + port);
});
