import { useEffect, useState } from "react";

function DemoItem({ demoInfo, playCurrentSong, playSong, addToPlaylist }) {
  const [playlistIds, setPlaylistIds] = useState([]);
  const [isFill, setFill] = useState(false);

  const playCurrent = () => {
    playCurrentSong(demoInfo);
    playSong();
  };

  const addSong = () => {
    addToPlaylist(demoInfo);
    setFill(!isFill);
  };

  const isInPlaylist = playlistIds.includes(demoInfo.id);

  useEffect(() => {
    fetch("http://localhost:8000/playlist", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        const extractedIds = data.map((item) => item.id);
        setPlaylistIds(extractedIds);
        if (extractedIds.includes(demoInfo.id)) {
          setFill(true);
        }
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="demo-song">
      <img src={demoInfo.img} alt={demoInfo.name} onClick={playCurrent} />
      <p className="demo-name inPlaylist">
        {demoInfo.title}{" "}
        {/* <span
          className={`add-to-playlist ${isInPlaylist ? "fill-heart" : ""} ${
            isFill ? "fill-heart" : ""
          }`}
          onClick={addSong}
        >
          ♡
        </span> */}
        <span
          className={`add-to-playlist ${isFill ? "fill-heart" : ""}`}
          onClick={addSong}
        >
          ♡
        </span>
      </p>
    </div>
  );
}

export default DemoItem;
