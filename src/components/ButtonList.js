import React from "react";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { setVideoRecords } from "../utils/videoSlice";

const ButtonList = () => {
  const langKey = useSelector((store) => store.config.lang);
  const dispatch = useDispatch();

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

  const fetchSearchSuggestions = async (searchQuery) => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    dispatch(setVideoRecords(json.items));
  };

  return (
    <div className="flex">
      {list.map((item) => (
        <Button
          key={item}
          name={lang[langKey][item] || item}
          onClick={() => fetchSearchSuggestions(item)}
        />
      ))}
    </div>
  );
};

export default ButtonList;
