import express from "express"
const app = express()
const port = 3000
import nodemailer from "nodemailer"


// nodemailer config
const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: "andrew31@ethereal.email",
      pass: "HwSd9QbQPpN4E1dVXZ",
    },
  });

  const sendEmail = async (req, res) => {
    const info = await transporter.sendMail({
      from: '"Andrew Nikolaus 👻" <andrew31@ethereal.email>', // sender address
      to: "5099903@gmail.com", // list of receivers
      subject: "Congratulation! Benizar income support (SINDH BANK)✔",
      text: "Mubarak ho appka benazir income support ma 10 lac cash or 20 tola sona nikla haa. Abhi 2000rs 03221767616 ma bhejain or inaam hasil krain", // plain text body
      html: "<b>Hello world?</b>", // html body
    });
  
    console.log("Message sent: %s", info.messageId);
    res.send("email sent");
  };
  
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get("/sendemail",sendEmail)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})