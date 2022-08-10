import React from "react";

function Message({ message, name }) {
  return (
    <li>
      <div className="message-data">
        <span className="message-data-name">
          <i className="fa fa-circle online"></i>
          {name}
        </span>
        <span className="message-data-time">{message.time}</span>
      </div>
      <div className="message my-message">{message.text}</div>
    </li>
  );
}

export default Message;
