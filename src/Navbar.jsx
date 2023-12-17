function Navbar() {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="h3-style app-name">
          <a href="/">
            <span className="top">&#8514;</span>
            SONG BOX
            <span className="btm">&#8514;</span>
          </a>
        </li>
      </ul>
      <ul className="links">
        <li>Demo</li>
        <li>Playlist</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
