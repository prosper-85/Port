import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro ()
{
  const textRef = useRef();

  useEffect( () =>
  {
    init( textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: [ "Frontend Dev💻", "MERN-Stack Dev😎", "Mobile Dev📱" ],
    } );
  }, [] );

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="wrapper">
          <div className="background"></div>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>HoluwaTobi</h1>
          <h3>
            Freelance <span ref={textRef}></span>
          </h3>
        </div>
        <div className="btn-wrapper">
          <a href="#contact">
            <button className="btn hire">hire me</button>
          </a>
          <a href="assets/tobi.pdf" target="_blank" rel="noopener noreferrer"><button className="btn resume">get resume</button></a>
        </div>
      </div>
    </div>
  );
}
