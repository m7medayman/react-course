import { useContext } from "react";
import VideoList from "./components/VideoList";
import { VideosContext } from "./context/videos";
import { CommentsContext } from "./context/comments";
import CommentList from "./components/CommentList.jsx";

function App() {
  const { videos, setVideos, totalViews } = useContext(VideosContext);
  const { comments, getComments } = useContext(CommentsContext);
  const count = videos.length;
  let heading;
  if (count > 0) {
    const noun = count > 1 ? "Videos" : "Video";
    heading = count + " " + noun;
  }
  try {
    return (
      <>
        why, what ,and how react!?
        <button
          onClick={() => {
            setVideos(videos.slice(0, 1));
          }}
        >
          test re-render
        </button>
        <h2>{heading}</h2>
        <VideoList />
        <CommentList />
      </>
    );
  } catch (error) {
    return <p>{error.message}</p>;
  }
}

export default App;
