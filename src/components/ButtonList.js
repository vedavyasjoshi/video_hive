import React from "react";
import Button from "./Button";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const ButtonList = () => {
  const langKey = useSelector((store) => store.config.lang);

  const list = [
    "all",
    "gaming",
    "live",
    "cricket",
    "cooking",
    "songs",
    "news",
    "movies",
    "sitcoms",
    "motivation",
    "gadgets",
    "guitar",
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
