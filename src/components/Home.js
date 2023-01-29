import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Model from "./Model";
import ModelAni from "./ModelAni";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import "../styles/home.css";

export default function Home() {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);

  useLayoutEffect(() => {
    setHeight(ref.current.offsetHeight);
  }, []);

  useEffect(() => {
    const handleScroll = (event) => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const opacity = 1 - scrollTop / height;

  return (
    <section id="home" ref={ref}>
      <div className="home" style={{ opacity: opacity }}>
        <Canvas
          camera={{ position: [2, 0, 12.25], fov: 10 }}
          className="home__avatar"
          style={{
            backgroundColor: "#111a21",
            width: "300px",
            height: "300px",
          }}
        >
          <ambientLight intensity={1.25} />
          <ambientLight intensity={0.1} />
          <directionalLight intensity={0.4} />
          <ModelAni position={[0.025, -0.9, 0]} />
          <OrbitControls />
        </Canvas>

        <div className="home__right">
          <h1 className="home__title">
            Hello, <br />
            I'm <span className="home__name">Minha Kim</span>
          </h1>
          <h3 className="home__description">
            A Full stack Developer based in Vancouver, Canada
          </h3>
          <a href="mailto:minhakk24@gmail.com" target="_blank">
            <button className="home__contact">CONTACT ME</button>
          </a>
        </div>
      </div>
    </section>
  );
}
