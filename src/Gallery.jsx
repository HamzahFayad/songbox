import { useState } from "react";

function Gallery({ item }) {
  const [audio, setAudio] = useState(null);
  const [buttonPlay, setButtonPlay] = useState("playbtn");

  //on play audio sample with visualizer
  let playAudio = (audio) => {
    let audioFile = new Audio(audio);
    setAudio(audioFile);
    audioFile.play().catch((error) => {
      // Handle the error
      console.error("Audio playback failed:", error);
    });
    setButtonPlay("playbtn playling-btn");
  };

  let stopAudio = () => {
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
    setButtonPlay("playbtn");
  };

  return (
    <>
      {/* <span className="arrow">&rarr;</span> */}
      <div className="poster">
        <div className="overlay" onMouseLeave={stopAudio}>
          <div className="overlay-infos">
            <p className="song-name">{item.name}</p>
            <button
              className={buttonPlay}
              onClick={() => {
                playAudio(item.sample);
              }}
            >
              &#9658;
            </button>
          </div>
        </div>
        <img src={item.src} alt={item.name} />
      </div>
    </>
  );
}

export default Gallery;
