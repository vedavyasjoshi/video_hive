import React from "react";

const Button = ({ name, onClick }) => {
  return (
    <div
      className="px-5 py-2  m-5 bg-gray-300 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
      onClick={onClick}
    >
      {name}
    </div>
  );
};

export default Button;
