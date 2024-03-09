import React from "react";
import { USER_IMAGE_URL } from "../utils/constants";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-sm p-2">
      <img className="h-8" alt="user" src={USER_IMAGE_URL} />
      <span className="font-bold p-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
