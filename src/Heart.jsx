function Heart({ isFill, addSong }) {
  return (
    <>
      <span
        className={`add-to-playlist ${isFill ? "fill-heart" : ""}`}
        onClick={addSong}
        title="add to playlist"
      >
        ♡
      </span>
    </>
  );
}

export default Heart;
