import { useState } from "react";
import { demodata } from "./data/demo-data";

function MyDemo() {
  const [isHome, setIsHome] = useState(true);
  let handle = () => {
    setIsHome(!isHome);
  };

  return (
    <section id="demo" className="Demo space-top">
      <div className="demo-wrap grid-width-wide">
        <h4>[SONG BOX]</h4>
        <div className="demo-wrapper">
          <aside className="demo-sidebar">
            <p>Sidebar</p>
            <p>Sidebar</p>
            <p>Sidebar</p> <p>Sidebar</p> <p>Sidebar</p>
          </aside>
          {isHome && (
            <div className="demo-playlist">
              {demodata.map((d) => {
                return (
                  <div key={d.id} className="demo-song">
                    <img src={d.img} alt={d.name} />
                    <p className="demo-name">{d.title}</p>
                  </div>
                );
              })}
              <button onClick={handle}>Play Song</button>
            </div>
          )}
          {!isHome && (
            <div className="demo-playlist">
              <p>Song Playing</p>
              <button onClick={handle}>Home</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default MyDemo;
