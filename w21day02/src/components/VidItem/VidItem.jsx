import React from "react";
import "./VidItem.scss";

export default function VidItem({
  video,
  onVideoSelect,
  handleBookmark,
  handleHistory
}) {
  return (
    <div className="viditem">
      <img
        alt="thumbnail"
        src={video.snippet.thumbnails.medium.url}
        onClick={() => onVideoSelect(video)}
      />
      <input
        className="button"
        type="button"
        onClick={e => handleBookmark(video.id.id)}
        value={video.bookmark ? "Remove Bookmark" : "Bookmark"}
      />
      <input
        style={
          handleHistory != null
            ? { display: "inline-block" }
            : { display: "none" }
        }
        className="button2"
        type="button"
        onClick={e => handleHistory(video.id.id)}
        value="Del Vid"
      />

      <h5>{video.snippet.title}</h5>
      <hr className="vidhr" />
    </div>
  );
}
