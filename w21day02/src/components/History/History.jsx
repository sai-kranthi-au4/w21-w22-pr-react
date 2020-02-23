import React from "react";
import VidItem from "../VidItem/VidItem";
import "./History.styles.scss";
export default function History({ history, handleBookmark, handleHistory }) {
  if (history.length !== 0) {
    const items = history.map((item, idx) => (
      <VidItem
        key={idx}
        video={item}
        handleBookmark={handleBookmark}
        handleHistory={handleHistory}
      />
    ));
    return <div className="history">{items}</div>;
  } else {
    return (
      <div className="history">
        <h2>No History</h2>
      </div>
    );
  }
}
