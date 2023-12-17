function Gallery() {
  //on hover play audio sample with visualizer
  let galleryImages = [
    {
      id: 1,
      name: "Miki Matsubara",
      src: "https://ih1.redbubble.net/image.4546560346.4850/flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
      sample: "staywithme.mp3",
    },
    {
      id: 2,
      name: "Toshiki Kadomatsu",
      src: "https://lastfm.freetls.fastly.net/i/u/ar0/9be507b7ef351b0548d3f58da6a09a10.jpg",
      sample: "airportlady.mp3",
    },
    {
      id: 3,
      name: "Mariya takeuchi",
      src: "https://i.scdn.co/image/ab67616d0000b273676ca4dc8c635709448286ef",
      sample: "plasticlove.mp3",
    },
    {
      id: 4,
      name: "Omega Tribe",
      src: "https://i.scdn.co/image/ab6761610000e5ebdcac637d506908e16063a418",
      sample: "dearbreeze.mp3",
    },
    {
      id: 5,
      name: "Yuri Tanaka",
      src: "https://www.onthecornermanila.com/wp-content/uploads/2022/11/Yuri-Tanaka-City-Lights-3rd-Season-LP.jpg",
      sample: "citylights.mp3",
    },
  ];
  // let bars = Array.from(Array(10).keys());

  return (
    <>
      {/* <span className="arrow">&rarr;</span> */}
      {galleryImages.map((img) => {
        return (
          <div className="poster" key={img.id}>
            <div className="overlay"></div>
            <img src={img.src} alt={img.name} />
            <audio src="audio.mp3" />
          </div>
        );
      })}
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
