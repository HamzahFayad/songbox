function Navbar() {
  return (
    <nav className="nav grid-width-wide">
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
        <li>
          <a href="#demo">Demo</a>
        </li>
        <li>
          <a href="#playlist">Playlist</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
