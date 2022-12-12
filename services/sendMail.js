import axios from "axios";

export const sendMail = async (nome, senderMail, content) => {
  const data = {
    nome,
    senderMail,
    content,
  };
  try {
    return await axios.post("../pages/api/Contact", data);
  } catch (error) {
    return error;
  }
};
