import React, { useState, useRef, useEffect } from "react";
import "./work.css";
import { galleryData } from "./gallery-data";
import Galleryprev from "./Galleryprev";
import { gsap } from "gsap";
import Display from "./Display";

export default function Work() {
  const [workCurr, setWorkCurr] = useState(0);
  const navArr = ["All", "Art", "Web"];
  const navFiller = useRef(null);
  const [galleryFilter, setGalleryFilter] = useState(galleryData);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const filter =
      workCurr === 0
        ? galleryData
        : galleryData.filter((e) => e.type === workCurr);
    setGalleryFilter(filter);
  }, [workCurr]);

  useEffect(() => {
    gsap.to(".gallery-prev-wrapper > div", {
      stagger: 0.2,
      x: -40,
      duration: 0.3,
      opacity: 0.4,
    });
  }, [galleryFilter]);

  const navClick = (e, index) => {
    const parent = Math.floor(
      e.currentTarget.parentNode.getBoundingClientRect().width / 3
    );
    const navBg = navFiller.current;
    navBg.style.left = parent * index + "px";
    setWorkCurr(index);

    gsap.to(".gallery-prev-wrapper > div", {
      stagger: 0.2,
      x: -40,
      duration: 0.3,
      opacity: 0.4,
    });
  };

  const galleryClick = (e) => {
    setSelected(e);
  };

  return (
    <div className='work-wrapper'>
      <div className='work-content'>
        {/* Header */}
        <div className='work-header-nav'>
          <div className='work-header subheader'>work</div>
        </div>
        {/* display showcase */}
        <Display selected={selected} />
        {/* work nav */}
        <div className='work-nav'>
          <div className='work-nav-filler' ref={navFiller}></div>
          <div className='work-nav-contents raleway font-bold'>
            {navArr.map((e, index) => (
              <div
                onClick={(event) => navClick(event, index)}
                key={index}
                className={`work-nav-all ${
                  workCurr === index ? "current" : ""
                }`}
              >
                {e}
              </div>
            ))}
          </div>
        </div>
        {/* gallery thumbnails */}
        <div className='gallery-prev-wrapper'>
          {galleryFilter.map((e, index) => (
            <Galleryprev
              data={e}
              num={index}
              key={e.id}
              length={galleryFilter.length}
              galleryClick={galleryClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
