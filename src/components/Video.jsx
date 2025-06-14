import React from "react";

const Video = ({ video: { id, name, description } }) => {
  return (
    <div key={id}>
      <p>{name}</p>
      <p>{description}</p>
    </div>
  );
};

export default Video;
