import { useState } from "react";

function Gallery({ item }) {
  //on hover play audio sample with visualizer

  // let bars = Array.from(Array(10).keys());
  const [audio, setAudio] = useState(null);

  let playAudio = (audio) => {
    let audioFile = new Audio(audio);
    setAudio(audioFile);
    audioFile.play().catch((error) => {
      // Handle the error, possibly inform the user
      console.error("Audio playback failed:", error);
    });
  };

  let stopAudio = () => {
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
  };

  return (
    <>
      {/* <span className="arrow">&rarr;</span> */}
      <div className="poster">
        <div className="overlay" onMouseLeave={stopAudio}>
          <div className="overlay-infos">
            <p className="song-name">{item.name}</p>
            <button
              className="playbtn"
              onClick={() => {
                playAudio(item.sample);
              }}
            >
              &#9658;
            </button>
          </div>
        </div>
        <img src={item.src} alt={item.name} />
        {/* <audio src={item.sample} controls style={{ opacity: "0.4" }} /> */}
      </div>
      {/* <div>
        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/0a22e047995365.588b1ebcbc069.jpg" />
      </div>
      <div>
        <img src="https://render.fineartamerica.com/images/rendered/default/poster/6/8/break/images-medium-5/stevie-wonder-pop-art-jim-zahniser.jpg" />
      </div>
      <div>
        <img src="https://i.pinimg.com/originals/30/fb/0d/30fb0d2726295a7c8ed2163dde1cebfe.jpg" />
      </div> */}
    </>
  );
}

export default Gallery;
