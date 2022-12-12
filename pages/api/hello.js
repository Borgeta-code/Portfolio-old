const nodemailer = require("nodemailer");

export default function sendMail(req, res) {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: "matheusborges123567@gmail.com",
      pass: "jndqohyljjqfqnwu",
    },
  });

  transporter
    .sendMail({
      from: '"Matheus" <matheusborges123567@gmail.com>',
      to: "matheusborges123567@gmail.com",
      subject: "Contato do site ✔",
      text: req.body.message,
      html: "",
    })
    .then((response) => {
      res.send(response);
    })
    .catch((error) => {
      res.send(error);
    });
}
