import React from "react";
import VidItem from "../VidItem/VidItem";
import "./Bookmarks.styles.scss";

export default function Bookmarks({
  bookmarks,
  handleBookmark,
  onVideoSelect
}) {
  const listOfBookmarks = bookmarks.filter(video => video.bookmark === true);
  if (listOfBookmarks.length !== 0) {
    const items = listOfBookmarks.map((item, idx) => (
      <VidItem
        key={idx}
        video={item}
        handleBookmark={handleBookmark}
        onVideoSelect={onVideoSelect}
      />
    ));
    return <div className="bookmarks">{items}</div>;
  } else {
    return (
      <div className="bookmarks">
        <h2>No Bookmarks</h2>
      </div>
    );
  }
}
