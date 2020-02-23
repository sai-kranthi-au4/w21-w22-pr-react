import React from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import VidPlayer from "./components/VidPlayer/VidPlayer";
import Header from "./components/Header/Header";
import SideNav from "./components/Sidebar/Sidebar";
import youtube from "./api/youtube";
class App extends React.Component {
  // state = {
  //   videos: [],
  //   selectedVideo: null,
  //   history: []
  // };

  //DUMMY DATA TO SAVE API REQUESTS WHILE TESTING
  state = {
    videos: [
      {
        kind: "youtube#searchResult",
        etag: '"Fznwjl6JEQdo1MGvHOGaz_YanRU/VtyVKzmnbK8_r-hwF1JxMALGz_w"',
        id: { kind: "youtube#video", videoId: "JYTIz96tzro", id: 0 },
        snippet: {
          publishedAt: "2020-02-07T13:37:11.000Z",
          channelId: "UC1KonH1j8WMhc5cT6Bp7NtA",
          title: "Bling Bling | Yo Yo Honey Singh Live",
          description:
            "You have to watch this!! Exclusive video Yo Yo Honey Singh's Live Performance. #yoyohoneysingh #LiveShows Video Edit : Daman Deep Subscribe now by ...",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/JYTIz96tzro/default.jpg",
              width: 120,
              height: 90
            },
            medium: {
              url: "https://i.ytimg.com/vi/JYTIz96tzro/mqdefault.jpg",
              width: 320,
              height: 180
            },
            high: {
              url: "https://i.ytimg.com/vi/JYTIz96tzro/hqdefault.jpg",
              width: 480,
              height: 360
            }
          },
          channelTitle: "Yo Yo Honey Singh",
          liveBroadcastContent: "none"
        },
        bookmark: false
      },
      {
        kind: "youtube#searchResult",
        etag: '"Fznwjl6JEQdo1MGvHOGaz_YanRU/XDvBtdsFr0LzbjKwdrkwREmr4JQ"',
        id: { kind: "youtube#video", videoId: "rrBE8ZuAtgY", id: 1 },
        snippet: {
          publishedAt: "2019-07-24T06:16:43.000Z",
          channelId: "UCq-Fj5jknLsUf-MWSy4_brA",
          title:
            "Yo Yo Honey Singh: Gur Nalo Ishq Mitha (The YOYO Remake) Malkit Singh The Golden Star |Bhushan Kumar",
          description:
            "Gulshan Kumar & T-Series Presents Bhushan Kumar's India's first Bhangra Hip Hop song Gur Nalo Ishq Mitha - The YOYO Remake is sung and composed by ...",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/rrBE8ZuAtgY/default.jpg",
              width: 120,
              height: 90
            },
            medium: {
              url: "https://i.ytimg.com/vi/rrBE8ZuAtgY/mqdefault.jpg",
              width: 320,
              height: 180
            },
            high: {
              url: "https://i.ytimg.com/vi/rrBE8ZuAtgY/hqdefault.jpg",
              width: 480,
              height: 360
            }
          },
          channelTitle: "T-Series",
          liveBroadcastContent: "none"
        },
        bookmark: false
      },
      {
        kind: "youtube#searchResult",
        etag: '"Fznwjl6JEQdo1MGvHOGaz_YanRU/AqhRUIn-2ic-zqt9jNctTyNi3ng"',
        id: {
          kind: "youtube#channel",
          channelId: "UC1KonH1j8WMhc5cT6Bp7NtA",
          id: 2
        },
        snippet: {
          publishedAt: "2012-01-19T08:10:26.000Z",
          channelId: "UC1KonH1j8WMhc5cT6Bp7NtA",
          title: "Yo Yo Honey Singh",
          description:
            "Yo Yo Honey Singh's Official YouTube Channel Honey Singh also known as Yo! Yo! Honey Singh is a Punjabi rapper and music producer. Initially he was a ...",
          thumbnails: {
            default: {
              url:
                "https://yt3.ggpht.com/-UELcj-i98zc/AAAAAAAAAAI/AAAAAAAAAAA/5dgJQHmzh8I/s88-c-k-no-mo-rj-c0xffffff/photo.jpg"
            },
            medium: {
              url:
                "https://yt3.ggpht.com/-UELcj-i98zc/AAAAAAAAAAI/AAAAAAAAAAA/5dgJQHmzh8I/s240-c-k-no-mo-rj-c0xffffff/photo.jpg"
            },
            high: {
              url:
                "https://yt3.ggpht.com/-UELcj-i98zc/AAAAAAAAAAI/AAAAAAAAAAA/5dgJQHmzh8I/s800-c-k-no-mo-rj-c0xffffff/photo.jpg"
            }
          },
          channelTitle: "Yo Yo Honey Singh",
          liveBroadcastContent: "upcoming"
        },
        bookmark: false
      },
      {
        kind: "youtube#searchResult",
        etag: '"Fznwjl6JEQdo1MGvHOGaz_YanRU/WyMLvmIn_ayqNbUklgEWfHloydo"',
        id: { kind: "youtube#video", videoId: "NbyHNASFi6U", id: 3 },
        snippet: {
          publishedAt: "2013-11-08T12:23:49.000Z",
          channelId: "UCq-Fj5jknLsUf-MWSy4_brA",
          title:
            "Blue Eyes Full Video Song Yo Yo Honey Singh | Blockbuster Song Of 2013",
          description:
            "Click to share it on Facebook - http://bit.ly/BlueEyesVideoSong Click to Tweet it on Twitter - http://ctt.ec/dtBVo T-Series proudly presents Yo Yo Honey Singh's ...",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/NbyHNASFi6U/default.jpg",
              width: 120,
              height: 90
            },
            medium: {
              url: "https://i.ytimg.com/vi/NbyHNASFi6U/mqdefault.jpg",
              width: 320,
              height: 180
            },
            high: {
              url: "https://i.ytimg.com/vi/NbyHNASFi6U/hqdefault.jpg",
              width: 480,
              height: 360
            }
          },
          channelTitle: "T-Series",
          liveBroadcastContent: "none"
        },
        bookmark: false
      },
      {
        kind: "youtube#searchResult",
        etag: '"Fznwjl6JEQdo1MGvHOGaz_YanRU/I-AOfmgIwLGQAygtQF20VwoLY1Y"',
        id: { kind: "youtube#video", videoId: "1bvYHkQxWmg", id: 4 },
        snippet: {
          publishedAt: "2018-12-21T08:00:20.000Z",
          channelId: "UCq-Fj5jknLsUf-MWSy4_brA",
          title:
            "Yo Yo Honey Singh: MAKHNA Video Song | Neha Kakkar, Singhsta, TDO | Bhushan Kumar",
          description:
            "Presenting the full video song of Yo Yo Honey Singh comeback video MAKHNA. A Prestige Diamond and Jewel exhibition in India which the world comes to see ...",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/1bvYHkQxWmg/default.jpg",
              width: 120,
              height: 90
            },
            medium: {
              url: "https://i.ytimg.com/vi/1bvYHkQxWmg/mqdefault.jpg",
              width: 320,
              height: 180
            },
            high: {
              url: "https://i.ytimg.com/vi/1bvYHkQxWmg/hqdefault.jpg",
              width: 480,
              height: 360
            }
          },
          channelTitle: "T-Series",
          liveBroadcastContent: "none"
        },
        bookmark: false
      }
    ],
    selectedVideo: {
      kind: "youtube#searchResult",
      etag: '"Fznwjl6JEQdo1MGvHOGaz_YanRU/VtyVKzmnbK8_r-hwF1JxMALGz_w"',
      id: { kind: "youtube#video", videoId: "JYTIz96tzro", id: 0 },
      snippet: {
        publishedAt: "2020-02-07T13:37:11.000Z",
        channelId: "UC1KonH1j8WMhc5cT6Bp7NtA",
        title: "Bling Bling | Yo Yo Honey Singh Live",
        description:
          "You have to watch this!! Exclusive video Yo Yo Honey Singh's Live Performance. #yoyohoneysingh #LiveShows Video Edit : Daman Deep Subscribe now by ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/JYTIz96tzro/default.jpg",
            width: 120,
            height: 90
          },
          medium: {
            url: "https://i.ytimg.com/vi/JYTIz96tzro/mqdefault.jpg",
            width: 320,
            height: 180
          },
          high: {
            url: "https://i.ytimg.com/vi/JYTIz96tzro/hqdefault.jpg",
            width: 480,
            height: 360
          }
        },
        channelTitle: "Yo Yo Honey Singh",
        liveBroadcastContent: "none"
      },
      bookmark: false
    },
    history: []
  };

  handleSubmit = async searchTerm => {
    const response = await youtube
      .get("search", {
        params: {
          part: "snippet",
          maxResults: 5,
          key: "YOUR-API-KEY",
          q: searchTerm
        }
      })
      .then(res => {
        return res.data.items.map((vid, idx) => ({
          ...vid,
          id: { ...vid.id, id: idx },
          bookmark: false
        }));
      });
    this.setState({
      videos: [...response],
      selectedVideo: response[0]
    });
  };
  onVideoSelect = video => {
    this.setState({
      selectedVideo: video,
      history: [...this.state.history, video]
    });
  };
  handleBookmark = key => {
    console.log(key);
    console.log(this.state);
    this.state.videos.map((vid, idx) => {
      if (idx == key) {
        console.log("true");
        if (this.state.videos[key].bookmark === true) {
          this.setState(state => {
            return (state.videos[key].bookmark = false);
          });
          console.log(this.state);
        } else {
          this.setState(state => {
            return (state.videos[key].bookmark = true);
          });
          console.log(this.state);
        }
      }
    });
  };
  handleHistory = key => {
    this.state.history.map(item => {
      if (item.id.id === key) {
        this.setState(state => {
          // console.log(state.history.indexOf(item));
          state.history.splice(state.history.indexOf(item), 1);
          if (!state.history.length) {
            return (state.history = []);
          }
          return state.history;
        });
        console.log(this.state);
      }
    });
  };
  render() {
    const { videos, selectedVideo, history } = this.state;
    return (
      <React.Fragment>
        <Header onFormSubmit={this.handleSubmit} />

        <Container className="main-wrapper">
          <SideNav
            className="side-bar"
            videos={videos}
            onVideoSelect={this.onVideoSelect}
            handleBookmark={this.handleBookmark}
          />
          <Row className="mt-1 vidplayer">
            <Col>
              <VidPlayer
                video={selectedVideo}
                onVideoSelect={this.onVideoSelect}
                bookmarks={videos}
                handleBookmark={this.handleBookmark}
                history={history}
                handleHistory={this.handleHistory}
              />
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
