import axios from "axios";

export const sendMail = async (nome, email, message) => {
  const data = {
    nome,
    email,
    message,
  };

  try {
    return await axios.post("/api/contact", data);
  } catch (error) {
    return error;
  }
};
