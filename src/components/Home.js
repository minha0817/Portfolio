import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Picture from "../pics/profile2.png";
import "../styles/home.css";

export default function Home({handleScrollTop}) {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);
  // const [scrollTop, setScrollTop] = useState(0);

  useLayoutEffect(() => {
    setHeight(ref.current.offsetHeight);
  }, []);

  // console.log("height", height);
  // const handleScrollTop = (event) => {
  //   setScrollTop(event.currentTarget.scrollTop);
  //   console.log("event.currentTarget.scrollTop", event.currentTarget);
  // };

  // console.log("out scrollTop", scrollTop);

  
  return (
    <section id="home" ref={ref} style={{}}>
      <div onScroll={() => {handleScrollTop()}}>
        <img className="home__picture" src={Picture} alt="Picture"></img>
        <h1 className="home__title">
          Hello, <br />
          I'm Minha Kim
        </h1>
        <h3 className="home__description">
          A Front-end Developer currently residing in Vancouver, Canada{" "}
        </h3>
        <a href="mailto:minhakk24@gmail.com" target="_blank">
          <button className="home__contact">CONTACT ME</button>
        </a>
      </div>
    </section>
  );
}
