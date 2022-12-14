import nodemailer from "nodemailer";

export default async (req, res) => {
  const { nome, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAILADRESS,
      pass: process.env.MAILPASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.MAILADRESS,
    subject: "Nova mensagem do Portfolio - " + nome,
    text: nome + "\n" + email + "\n \n" + message,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      res.send(error);
    } else {
      res.send(info);
    }
  });
};
