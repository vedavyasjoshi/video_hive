import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addVideoRecords } from "../utils/videoSlice";

const VideoContainer = () => {
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const {records, nextPageToken} = useSelector((store) => store.video);

  const fetchVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API + nextPageToken);
    const json = await data.json();
    dispatch(
      addVideoRecords({
        records: json.items,
        nextPageToken: json.nextPageToken,
      })
    );
  };

  useEffect(() => {
    fetchVideos();
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
      {records &&
        records.map((video, index) => (
          <Link key={video.id+index} to={"/watch?v=" + video.id}>
            <VideoCard info={video} />
          </Link>
        ))}
    </div>
  );
};

export default VideoContainer;
