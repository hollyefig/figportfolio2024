import React, { useState, useRef, useEffect } from "react";
import "./work.css";
import { galleryData } from "./gallery-data";
import Galleryprev from "./Galleryprev";
import { gsap } from "gsap";

export default function Work() {
  const [workCurr, setWorkCurr] = useState(0);
  const navArr = ["All", "Art", "Web"];
  const navFiller = useRef(null);

  const navClick = (e, index, d) => {
    const parent = Math.floor(
      d.target.parentNode.getBoundingClientRect().width / 3
    );
    const navBg = navFiller.current;
    navBg.style.left = parent * index + "px";
    setWorkCurr(index);
  };

  useEffect(() => {
    gsap.to(".gallery-prev-wrapper > div", {
      stagger: 0.2,
      x: -40,
      duration: 0.3,
      opacity: 0.4,
    });

    // return () => {
    //   second
    // }
  }, []);

  return (
    <div className='work-wrapper'>
      <div className='work-content'>
        {/* work header and nav */}
        <div className='work-header-nav'>
          <div className='work-header subheader'>work</div>
          <div className='work-nav'>
            <div className='work-nav-filler' ref={navFiller}></div>
            <div className='work-nav-contents raleway font-bold'>
              {navArr.map((e, index) => (
                <div
                  onClick={(div) => navClick(e, index, div)}
                  key={index}
                  className={`work-nav-all ${workCurr === index && "current"}`}
                >
                  {e}
                </div>
              ))}
            </div>
          </div>
          {/* END work header and nav */}
        </div>
        {/* Gallery thumbnails */}
        <div className='gallery-prev-wrapper'>
          {galleryData.map((e, index) => (
            <Galleryprev
              data={e}
              num={index}
              key={e.id}
              length={galleryData.length}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
