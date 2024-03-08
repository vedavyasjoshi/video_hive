import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "Gaming",
    "Live",
    "Cricket",
    "Cooking",
    "Songs",
    "News",
    "Movies",
    "Sitcoms",
    "Motivation",
    "Gadgets",
    "Guitar",
  ];

  return (
    <div className="flex">
      {list.map((item) => (
        <Button key={item} name={item} />
      ))}
    </div>
  );
};

export default ButtonList;
