import React, { useRef, useEffect, useState } from "react";
import "./nav.css";

export default function Nav({ bg, mob, scrollTo }) {
  const navHeightRef = useRef(null);
  const [navHeight, setNavHeight] = useState(0);

  // ? determine current nav height
  useEffect(() => {
    let h = navHeightRef.current.getBoundingClientRect().height;
    setNavHeight(h);
  }, []);

  return (
    <div className='nav-wrapper' ref={navHeightRef}>
      <div className='nav-inner'>
        {mob ? (
          <div className='nav-bg' style={{ bottom: 0 }}></div>
        ) : (
          <div
            className='nav-bg'
            style={bg ? { bottom: 0 } : { bottom: `${navHeight}px` }}
          ></div>
        )}

        <div className='nav-content-wrap'>
          <div className='nav-content'>
            <div
              id='nav-work'
              className='raleway font-bold'
              onClick={() => scrollTo("work-wrapper")}
            >
              work
            </div>
            <div
              id='nav-about'
              className='raleway font-bold'
              onClick={() => scrollTo("to-about")}
            >
              about
            </div>
            <div
              id='nav-contact'
              className='raleway font-bold'
              onClick={() => scrollTo("to-contact")}
            >
              contact
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
