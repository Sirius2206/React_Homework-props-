import React from "react";
import Response from "./Response";
import Message from "./Message";
import Typing from "./Typing";

function MessageHistory({ list }) {
  if (!list) return;
  return (
    <ul>
      {list.map((message) =>
        message.type === "response" ? (
          <Response
            key={message.id}
            message={message}
            name={message.from.name}
          />
        ) : message.type === "message" ? (
          <Message
            key={message.id}
            message={message}
            name={message.from.name}
          />
        ) : (
          <Typing key={message.id} message={message} name={message.from.name} />
        )
      )}
    </ul>
  );
}

MessageHistory.defaultProps = {
  list: [],
};

export default MessageHistory;
