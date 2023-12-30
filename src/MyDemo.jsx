import { useState, useEffect } from "react";
import { demodata } from "./data/demo-data";
import DemoItem from "./DemoItem";
import Playlist from "./Playlist";
import Sidebar from "./Sidebar";

function MyDemo() {
  const [isHome, setIsHome] = useState(true);

  const [current, setCurrent] = useState({});

  //const [playlist, setPlaylist] = useState([]);

  const [myplaylist, setMyPlaylist] = useState([]);

  const [refreshKey, setRefreshKey] = useState(0);

  const [currentSongIndex, setCurrentSongIndex] = useState(0); // Track the index of the current song

  const [searchInput, setSearchInput] = useState("");

  let toggleView = () => {
    setIsHome(!isHome);
  };

  useEffect(() => {
    fetch("http://localhost:8000/playlist", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setMyPlaylist(data);
      })
      .catch((error) => console.error(error));
  }, [refreshKey]);

  //ADDING TO PLAYLIST - not working yet
  //  const [added, setAdded] = useState(false);
  // let colorRed = (e) => {
  //   setAdded(!added);
  //   if (!e.target.classList.contains("added")) {
  //     e.target.classList.add("added");
  //   } else {
  //     e.target.classList.remove("added");
  //   }
  // };

  let playCurrentSong = (song) => {
    //display current song for demo
    setCurrent(song);
    setCurrentSongIndex(song.id - 1);
  };

  const filteredDemoSongs = demodata.filter(
    (d) =>
      d.name.toLowerCase().includes(searchInput.toLowerCase()) ||
      d.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  // Function to play the next song
  const playNextSong = () => {
    const nextIndex = (currentSongIndex + 1) % filteredDemoSongs.length;
    setCurrentSongIndex(nextIndex); // Update the index of the current song
    setCurrent(filteredDemoSongs[nextIndex]);
  };

  // Function to play the next song
  const playPrevSong = () => {
    const nextIndex = (currentSongIndex - 1) % filteredDemoSongs.length;
    setCurrentSongIndex(nextIndex);
    setCurrent(filteredDemoSongs[nextIndex]);
    //console.log(nextIndex);
  };

  // let addToPlaylist = (song) => {
  //   //adds to playlist, or remove
  //   const songIndex = playlist.findIndex((p) => p.id === song.id);
  //   if (songIndex === -1) {
  //     //song not in the playlist, add it
  //     setPlaylist([...playlist, song]);
  //   } else {
  //     //song already in the playlist, remove it
  //     const updatedPlaylist = [...playlist];
  //     updatedPlaylist.splice(songIndex, 1);
  //     setPlaylist(updatedPlaylist);
  //   }
  // };

  async function postToPlaylist(song) {
    const songIndex = myplaylist.findIndex((p) => p.id === song.id);
    const songInPlaylist = { ...song };
    songInPlaylist.inPlaylist = true;
    if (songIndex === -1) {
      //song not in the playlist, add it
      await fetch("http://localhost:8000/playlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(songInPlaylist),
      }).then((response) => {
        console.log(response);
        setRefreshKey((oldKey) => oldKey + 1);
      });
    } else {
      await fetch(`http://localhost:8000/playlist/${song.id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(song),
      }).then((response) => {
        console.log(response);
        setRefreshKey((oldKey) => oldKey - 1);
      });
    }
  }

  let handleSearch = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const audioFile = formData.get("audio-file");
    const songTitle = formData.get("song-title");
    const artist = formData.get("artist-name");
    console.log(`./assets/${audioFile.name}` + " " + artist + " " + songTitle);
  };

  // useEffect(() => {
  //   console.log("useEffect", playlist);
  // }, [playlist]);

  return (
    <>
      <section id="demo" className="Demo space-top">
        <div className="demo-wrap grid-width-wide">
          <h4>[SONG BOX]</h4>
          <div className="demo-wrapper">
            <div>
              <aside className="demo-sidebar">
                {isHome && (
                  <Sidebar
                    nr="1"
                    headline="Song Box is for music ♪ Song Box is for you ♪"
                    searchInput={searchInput}
                    handleSearch={handleSearch}
                  />
                )}
                <br />
                {current.id && !isHome ? (
                  <>
                    <img
                      className="audiowaves"
                      src="../assets/audiowaves.gif"
                      alt="audio waves"
                    />
                    <p className="curr">
                      <strong>{current.title}</strong> <br />
                      <span>by {current.name}</span>
                    </p>
                  </>
                ) : (
                  <></>
                )}
              </aside>
              <aside className="demo-sidebar">
                <Sidebar
                  nr="2"
                  headline="Add your own songs ♪"
                  handleSubmit={handleSubmit}
                />
              </aside>
            </div>
            {isHome && (
              <div className="demo-playlist demo-view">
                {filteredDemoSongs.length > 0 ? (
                  filteredDemoSongs.map((d) => {
                    return (
                      <DemoItem
                        playSong={toggleView}
                        key={d.id}
                        demoInfo={d}
                        //colorRed={colorRed}
                        playCurrentSong={playCurrentSong}
                        addToPlaylist={postToPlaylist}
                      />
                    );
                  })
                ) : (
                  <p className="no-songs" style={{ color: "white" }}>
                    Sorry, no songs were found :/
                  </p>
                )}
              </div>
            )}
            {!isHome && (
              <div className="demo-current-song demo-view">
                <button className="homebtn" onClick={toggleView}>
                  &#8592; Demo
                </button>
                {current && (
                  <div className="playing-song" style={{ color: "white" }}>
                    <img
                      className="audiowaves"
                      src="../assets/audiowaves.gif"
                      alt="audio waves"
                    />
                    <h2>
                      {current.title} <br />
                      <span> by {current.name}</span>
                    </h2>
                    <div className="image-container">
                      <div className="inner"></div>
                      <img src={current.img} alt="" />
                    </div>
                    <audio
                      id="player"
                      //style={{ display: "none" }}
                      src={current.audio}
                      controls
                      autoPlay
                      loop
                    />
                    {current.id > 1 && (
                      <button onClick={playPrevSong}>← back</button>
                    )}
                    {current.id <= demodata.length && (
                      <button onClick={playNextSong}>next →</button>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        <br />
        <br />
        {/* <div style={{ height: "40vh" }}></div> */}
      </section>
      <div className="my-playlist grid-width-wide" id="playlist">
        <h2>Playlist</h2>
        <Playlist playlist={myplaylist} />
      </div>
    </>
  );
}

export default MyDemo;
