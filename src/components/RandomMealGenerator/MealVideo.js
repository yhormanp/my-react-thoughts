import React from "react";

function MealVideo({videoUrl, width, height}) {
  return (
    <div>
      <iframe
        width="100%"
        height="480"
        src={`https://www.youtube.com/embed/${videoUrl.slice(-11)}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
}

export default MealVideo;
