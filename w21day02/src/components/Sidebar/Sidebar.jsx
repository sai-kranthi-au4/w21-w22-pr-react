import React from "react";
import VidItem from "../VidItem/VidItem";
import "./Sidebar.styles.scss";

const SideNav = ({ videos, onVideoSelect, handleBookmark }) => {
  // console.log(videos);
  const listOfVideos = videos.map((video, id) => {
    return (
      <VidItem
        onVideoSelect={onVideoSelect}
        key={id}
        video={video}
        handleBookmark={handleBookmark}
      />
    );
  });
  return <div className="sidenav">{listOfVideos}</div>;
};
export default SideNav;
