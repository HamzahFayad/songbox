function Playlist({ playlist }) {
  return (
    <div className="playlist grid-width-wide">
      <h2>Playlist</h2>
      <br />
      {playlist.map((p) => {
        return (
          <div key={p.id} className={"playlist-wrap inPlaylist-" + p.id}>
            <p>
              <strong>[0{p.id}]</strong>
            </p>
            <figure>
              <img src={p.img} alt={p.name} className="playlist-wrap-img" />
            </figure>
            <h3>
              <strong>{p.title}</strong>
            </h3>
            <h4>by {p.name}</h4>
            <hr
              style={{ borderTop: "1px solid #34332f", marginBottom: "1rem" }}
            ></hr>
          </div>
        );
      })}
    </div>
  );
}

export default Playlist;
