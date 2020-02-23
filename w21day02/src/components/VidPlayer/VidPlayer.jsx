import React from "react";
import ResponsiveEmbed from "react-bootstrap/ResponsiveEmbed";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Bookmarks from "../Bookmarks/Bookmarks";
import History from "../History/History";
import "./VidPlayer.styles.scss";

const VidPlayer = ({
  video,
  bookmarks,
  handleBookmark,
  history,
  handleHistory,
  onVideoSelect
}) => {
  if (!video) return <div>Loading...</div>;
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <React.Fragment>
      <div style={{ height: "100vh", marginLeft: "10px" }}>
        <ResponsiveEmbed aspectRatio="21by9">
          <iframe src={videoSrc} />
        </ResponsiveEmbed>
        <Row
          className="mt-1 pt-2"
          style={{
            width: "80%",
            margin: "0 auto",
            border: "1px solid #000",
            backgroundColor: "#111111"
          }}
        >
          <Col>
            <History
              history={history}
              handleBookmark={handleBookmark}
              handleHistory={handleHistory}
            />
          </Col>
          <Col>
            <Bookmarks
              bookmarks={bookmarks}
              handleBookmark={handleBookmark}
              onVideoSelect={onVideoSelect}
            />
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};
export default VidPlayer;
