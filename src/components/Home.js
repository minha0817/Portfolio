import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import "../styles/home.css";
import { Avatar } from "./Avatar";

export default function Home() {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useLayoutEffect(() => {
    setHeight(ref.current.offsetHeight);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setOpacity(1 - window.scrollY / height);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [height]);

  return (
    <section id="home" ref={ref}>
      <div className="home" style={{ opacity: opacity }}>
        <Avatar />

        <div className="home__right">
          <h1 className="home__title">
            Hello, <br />
            <span className="home__introduction">
              I'm{" "}
              <span className="home__introduction home__name">Minha Kim</span>
            </span>
          </h1>
          <h3 className="home__description">
            A Full Stack Developer based in Vancouver, Canada
          </h3>
          <a href="mailto:minhakk24@gmail.com" target="_blank">
            <button className="home__contact">CONTACT ME</button>
          </a>
        </div>
      </div>
    </section>
  );
}
