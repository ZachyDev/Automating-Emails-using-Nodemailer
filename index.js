require('dotenv').config()
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.APP_MAIL,
    pass: process.env.APP_PASS
  }
});

var mailOptions = {
  from: process.env.APP_MAIL,
  to: process.env.APP_RECIEPENTS,
  subject: 'Sending Email using Node.js',
  attachments: [
    {   // utf-8 string as an attachmentcls
        filename: 'response.pdf',
        content: 'Hello user'
    }
]
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});


