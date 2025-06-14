import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import VideoProvider from "./context/videos.jsx";
import CommentsProvider from "./context/comments.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CommentsProvider>
      <VideoProvider>
        <App />
      </VideoProvider>
    </CommentsProvider>
  </StrictMode>
);
