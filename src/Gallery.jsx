function Gallery() {
  let galleryImages = [
    {
      id: 0,
      name: "70s",
      src: "https://mir-s3-cdn-cf.behance.net/project_modules/hd/0a22e047995365.588b1ebcbc069.jpg",
    },
    {
      id: 1,
      name: "Stevie Wonder",
      src: "https://render.fineartamerica.com/images/rendered/default/poster/6/8/break/images-medium-5/stevie-wonder-pop-art-jim-zahniser.jpg",
    },
    {
      id: 2,
      name: "MJ",
      src: "https://i.pinimg.com/originals/30/fb/0d/30fb0d2726295a7c8ed2163dde1cebfe.jpg",
    },
  ];
  return (
    <>
      <span>&rarr;</span>
      {galleryImages.map((img) => {
        return (
          <div className="poster" key={img.id}>
            <img src={img.src} alt={img.name} />
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
