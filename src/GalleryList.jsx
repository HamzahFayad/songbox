import Gallery from "./Gallery";

function GalleryList() {
  let galleryImages = [
    {
      id: 1,
      name: "Miki Matsubara - Stay With Me ♪",
      src: "https://ih1.redbubble.net/image.4546560346.4850/flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
      sample: "./assets/Jordan-Critz-Meris.mp3",
      //sample: "staywithme.mp3",
    },
    {
      id: 2,
      name: "Toshiki Kadomatsu - Airport Lady ♪",
      src: "https://lastfm.freetls.fastly.net/i/u/ar0/9be507b7ef351b0548d3f58da6a09a10.jpg",
      sample: "./assets/drift.mp3",
      //sample: "airportlady.mp3",
    },
    {
      id: 3,
      name: "Mariya Takeuchi - Plastic Love ♪",
      src: "https://i.scdn.co/image/ab67616d0000b273676ca4dc8c635709448286ef",
      //sample: "plasticlove.mp3",
      sample: "./assets/Jordan-Critz-Meris.mp3",
    },
    {
      id: 4,
      name: "Omega Tribe - Dear Breeze ♪",
      src: "https://i.scdn.co/image/ab6761610000e5ebdcac637d506908e16063a418",
      sample: "dearbreeze.mp3",
    },
    {
      id: 5,
      name: "Yuri Tanaka - City Lights ♪",
      src: "https://www.onthecornermanila.com/wp-content/uploads/2022/11/Yuri-Tanaka-City-Lights-3rd-Season-LP.jpg",
      sample: "citylights.mp3",
    },
  ];
  return (
    <div
      className="Header-right"
      style={{ gridTemplateColumns: `repeat(${galleryImages.length},1fr)` }}
    >
      {galleryImages.map((img) => {
        return (
          <Gallery item={img} key={img.id} />
          // <div className="poster" key={img.id}>
          //   <div className="overlay"></div>
          //   <img src={img.src} alt={img.name} />
          //   <audio src="audio.mp3" />
          // </div>
        );
      })}
    </div>
  );
}

export default GalleryList;
