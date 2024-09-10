import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addVideoRecords } from "../utils/videoSlice";
import { openMenu } from "../utils/appSlice";
import Shimmer from "../utils/Shimmer";

const VideoContainer = () => {
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const { records, nextPageToken } = useSelector((store) => store.video);

  const fetchVideos = async () => {
    setIsLoading(true);
    const data = await fetch(YOUTUBE_VIDEOS_API + nextPageToken);
    const json = await data.json();
    if (json?.items?.length > 0) {
      dispatch(
        addVideoRecords({
          records: json.items,
          nextPageToken: json.nextPageToken,
        })
      );
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchVideos();
    dispatch(openMenu());
  }, [page]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-wrap">
      {isLoading &&
        (() => {
          let components = [];
          for (let i = 0; i < 30; i++) components.push(<Shimmer key={i} />);
          return components;
        })()}
      {records &&
        records.map((video, index) => (
          <Link key={video.id + index} to={"/watch?v=" + video.id}>
            <VideoCard info={video} />
          </Link>
        ))}
    </div>
  );
};

export default VideoContainer;
