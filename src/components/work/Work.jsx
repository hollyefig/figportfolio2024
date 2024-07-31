import React, { useState, useRef, useEffect } from "react";
import "./work.css";
import Display from "./Display";
import { galleryData } from "./gallery-data";
import Galleryprev from "./Galleryprev";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

export default function Work() {
  const [workCurr, setWorkCurr] = useState(0);
  const navArr = ["All", "Art", "Web"];
  const navFiller = useRef(null);
  const [galleryFilter, setGalleryFilter] = useState(galleryData);
  const [selected, setSelected] = useState(galleryData[0]);
  const displayRef = useRef(null);
  const [navFillW, setNavFillW] = useState();

  //   & organize filter on load
  useEffect(() => {
    const filter =
      workCurr === 0
        ? galleryData
        : galleryData.filter((e) => e.type === workCurr);
    setGalleryFilter(filter);
  }, [workCurr]);

  //   ? animate in gallery
  useEffect(() => {
    gsap.to(".gallery-prev-wrapper > div", {
      stagger: 0.2,
      x: -40,
      duration: 0.3,
      opacity: 0.4,
    });
  }, [galleryFilter]);

  //  & Nav filler
  const winResize = () => {
    setNavFillW(navFiller.current.parentNode.getBoundingClientRect().width / 3);
  };
  useEffect(() => {
    if (navFiller !== null) {
      setNavFillW(
        navFiller.current.parentNode.getBoundingClientRect().width / 3
      );
    }
    window.addEventListener("resize", () => winResize());
    return () => {
      window.removeEventListener("resize", () => winResize());
    };
  }, []);

  //  ?  When work nav is clicked
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

  //   & display animate in
  const galleryClick = (e) => {
    const tl = gsap.timeline();
    const displayElement = displayRef.current;
    const dHeight = parseInt(
      getComputedStyle(displayElement).height.replace("px", "")
    );

    tl.to(".left-display-div", { opacity: 0, duration: 0.3 })
      .to(".display-right-content", { opacity: 0, duration: 0.3 }, "<")
      .add(() => setSelected(e))
      .to(".left-display-div", { opacity: 0, right: 30, duration: 0 })
      .to(
        ".display-right-content",
        { opacity: 0, right: 30, duration: 0 },
        "<"
      );

    tl.to(window, {
      scrollTo: { y: ".work-wrapper", offsetY: 50 },
      duration: 0.5,
      ease: "power2.out",
    });
    if (dHeight === 0) {
      tl.to(displayElement, {
        height: "auto",
        duration: 0.5,
        ease: "power2.out",
      });
    }
    tl.to(".left-display-div", { opacity: 1, right: 0 }, "<.5");
    tl.to(".display-right-content", { opacity: 1, right: 0 }, "<");
  };

  return (
    <div className='work-wrapper' id='work-wrapper'>
      <div className='work-content'>
        {/* Header */}
        <div className='work-header subheader'>work</div>
        {/* display showcase */}
        <Display selected={selected} displayRef={displayRef} />
        {/* work nav */}
        <div className='work-nav'>
          <div
            className='work-nav-filler'
            ref={navFiller}
            style={{ width: `${navFillW}px` }}
          ></div>
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
