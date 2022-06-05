import {useState} from "react";
import checkIcon from "./../../icons/check.svg";
import paperPlaneIcon from "./../../icons/paperPlane.svg";
import "./SendButton.css";

export default function SendButton({isTextExist}) {
  const [sent, setSent] = useState(false);

  function send() {
    setSent(isTextExist());
    const id = setTimeout(() => {
      setSent(false);
      clearTimeout(id);
    }, 1000);
  }

  return (sent ? (
      <div className="SentButton">
        <span>Sent</span>
        <img src={paperPlaneIcon} alt="Check Icon" className="success"/>
      </div>
    ) : (
      <div className="SendButton" onClick={send}>
        <span>Send</span>
        <img src={paperPlaneIcon} alt="Paper Plane Icon" className="plane"/>
      </div>
    )
  );
}