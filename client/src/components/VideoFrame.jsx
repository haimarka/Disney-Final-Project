import React from "react";

export default function VideoFrame({src,title,width,height,poster}) {
  return (
    <div>
      <iframe
        width={width}
        height={height}
        src={src}
        title={title}
        poster={poster}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
