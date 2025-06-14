import React, { useContext } from "react";
import Video from "./Video";
import { VideosContext } from "../context/videos";
import CommentList from "./CommentList.jsx";

const Videos = () => {
  const { videos, setVideos } = useContext(VideosContext);

  return (
    <>
      <button
        onClick={() => {
          setVideos(videos.slice(0, 1));
        }}
      >
        test re-render
      </button>
      {videos.map((video) => (
        <section>
          <Video key={video.id} video={video} />
          <CommentList />
        </section>
      ))}
    </>
  );
};

export default Videos;
