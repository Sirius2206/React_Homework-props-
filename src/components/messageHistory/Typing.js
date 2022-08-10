import React from "react";

function Typing({ message, name }) {
  return (
    <li className="clearfix">
      <div className="message-data align-right">
        <span className="message-data-time">{message.time}</span> &nbsp; &nbsp;
        <span className="message-data-name">{name}</span>
        <i className="fa fa-circle me"></i>
      </div>
      <div className="float-right typing">typing ● ● ●</div>
    </li>
  );
}

export default Typing;
