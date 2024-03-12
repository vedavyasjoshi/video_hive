import React from "react";
import Button from "./Button";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const ButtonList = () => {
  const langKey = useSelector((store) => store.config.lang);

  const list = [
    "All",
    "Gaming",
    "Live",
    "cricket",
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
        <Button key={item} name={lang[langKey][item] || item} />
      ))}
    </div>
  );
};

export default ButtonList;
