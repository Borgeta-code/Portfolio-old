import nodemailer from "nodemailer";

const email = process.env.MAILADRESS;
const pass = process.env.MAILPASS;

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: "matheusborges123567@gmail.com",
    pass: "jndqohyljjqfqnwu",
  },
});

export default async (req, res) => {
  const { senderMail, name, content } = req.body;
  if (!senderMail || !name || content) {
    res.status(403).send();
    return;
  }

  const mailerRes = await mailer({ senderMail, name, text: content });
  res.send(mailerRes);
};

const mailer = ({ senderMail, nome, text }) => {
  const from =
    nome && senderMail ? "${nome} <${senderMail}>" : "$<name || senderMail}";
  const message = {
    from,
    to: "${email}",
    subject: "Contato do site ✔ - ${name}",
    text,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) =>
      error ? reject(error) : resolve(info)
    );
  });
};
