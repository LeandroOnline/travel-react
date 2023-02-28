import { useState } from "react";
import "./Services.css";
function Contact() {
  const [message, setMessage] = useState("");
  const [send, setSend] = useState(true);
  const buttonsend = send ? "SEND" : "DONE";

  const sendMessage = () => {
    window.open("https://wa.me/5493435267411?text=" + message);
    setSend(false);
  };

  return (
    <div className="services">
      <div className="ws">
        <img
          className="wsicon"
          src="https://cdn-icons-png.flaticon.com/512/124/124034.png?w=360"
          alt=""
        />

        {send ? (
          <textarea
            value={message}
            type="text"
            placeholder="Write the message..."
            autoFocus
            onChange={(value) => setMessage(value.target.value)}
          />
        ) : (
          <h2>Message sent!</h2>
        )}
        {send ? (
          <button onClick={sendMessage}>{buttonsend}</button>
        ) : (
          <button onClick={() => setSend(true)}>AGAIN?</button>
        )}
      </div>
      <div>
        <a href="https://www.instagram.com/leasavat/" target='_blank'>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
            className="wsicon"
            alt=""
          />
        </a>
        <a href="https://www.linkedin.com/in/leandrosavat/" target='_blank'>
          <img
            src="https://cdn-icons-png.flaticon.com/512/179/179330.png"
            className="wsicon"
            alt=""
          />
        </a>
        <a href='https://github.com/LeandroOnline' target='_blank'>
          <img
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            className="wsicon"
            alt=""
          />
        </a>
        <a href="https://docs.google.com/document/d/1b2jsbmjvv71Y3k0VvwCaaaV_On4aE8BF7e6vgu2aliM/edit?usp=sharing" target='_blank'>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1604/1604478.png"
            className="wsicon"
            alt=""
          />
        </a>
      </div>
    </div>
  );
}
export default Contact;
