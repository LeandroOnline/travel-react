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

        {send?<textarea
          value={message}
          type="text"
          placeholder="Write the message..."
          autoFocus
          onChange={(value) => setMessage(value.target.value)}
        />:<h2>Message sent!</h2>}
        {send? <button onClick={sendMessage}>{buttonsend}</button> : <button onClick={()=>setSend(true)}>AGAIN?</button>}

      </div>
    </div>
  );
}
export default Contact;
