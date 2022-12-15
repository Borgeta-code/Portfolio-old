import { React, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { sendMail } from "../../services/sendMail";

export function Form() {
  const [nome, setNome] = useState("");
  const [email, setMail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoad] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    if (!nome || !email || !message) {
      toast.error("fill all the data!", {
        style: {
          background: "#000012",
          color: "#f7f7f7",
          border: "2px solid #8800f0",
        },
        iconTheme: {
          primary: "#8800f0",
          secondary: "#ffffff",
        },
      });
      return;
    }

    try {
      setLoad(true);
      await sendMail(nome, email, message);
      setNome("");
      setMail("");
      setMessage("");
      toast.success("Thank you for contacting me!", {
        style: {
          background: "#000012",
          color: "#f7f7f7",
          border: "2px solid #8800f0",
        },
        iconTheme: {
          primary: "#8800f0",
          secondary: "#ffffff",
        },
      });
      return;
    } catch (error) {
      toast.error("there was an error, please try again!", {
        style: {
          background: "#000012",
          color: "#f7f7f7",
          border: "2px solid #8800f0",
        },
        iconTheme: {
          primary: "#8800f0",
          secondary: "#ffffff",
        },
      });
      return;
    } finally {
      setLoad(false);
    }
  }

  return (
    <div className="flex justify-center items-center">
      <Toaster position="bottom-right" />
      <form
        onSubmit={handleSubmit}
        className="flex w-max flex-col justify-center items-center md:p-3"
      >
        <div id="containerInput" className="flex justify-center mb-4">
          <label>Name</label>
          <input
            type="text"
            value={nome}
            onChange={({ target }) => setNome(target.value)}
          />
        </div>
        <div id="containerInput" className="flex justify-center mb-4">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={({ target }) => setMail(target.value)}
          />
        </div>
        <div id="containerInput" className="flex justify-center mb-4">
          <label>Message</label>
          <textarea
            value={message}
            onChange={({ target }) => setMessage(target.value)}
          />
        </div>

        <div id="button-container">
          <div id="allsides-2">
            <button id="button" disabled={loading}>
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
