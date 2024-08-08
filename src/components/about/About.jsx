import React, { useEffect, useRef, useState } from "react";
import "./about.css";
import { skillArray } from "./skills";
import Svg from "../Svg";
import { gsap } from "gsap";
import { useSwipeable } from "react-swipeable";
import resume from "../../IMGs/resume2024.pdf";

export default function About() {
  const bluebg = useRef(null);
  const [height, setHeight] = useState("auto");
  const switchRef = useRef(null);
  const skillsWrapRef = useRef(null);

  //   adjust outer blue bg
  useEffect(() => {
    const updateHeight = () => {
      if (bluebg.current) {
        setHeight(bluebg.current.getBoundingClientRect().height + "px");
      }
    };
    window.addEventListener("resize", updateHeight);
    updateHeight();
    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  //   & clicking skill switch for mobile
  const skillSwitch = (i) => {
    const move = switchRef.current.getBoundingClientRect().width / 2;
    const skillsFrame = skillsWrapRef.current;
    const skillsMove = skillsFrame.getBoundingClientRect().width;
    const tl = gsap.timeline({
      defaults: { duration: 0.3, ease: "power2.out" },
    });
    if (i >= 1) {
      tl.to(".skill-switch-bg", { x: move }).to(
        ".skills-wrapper",
        {
          x: -skillsMove,
        },
        "<"
      );
    } else {
      console.log("clicked", move);
      tl.to(".skill-switch-bg", { x: 0 }).to(
        ".skills-wrapper",
        {
          x: 0,
        },
        "<"
      );
    }
  };

  // ? Swipe
  const handlers = useSwipeable({
    onSwipedLeft: () => skillSwitch(1),
    onSwipedRight: () => skillSwitch(0),
    trackMouse: true,
    preventDefaultTouchmoveEvent: true,
  });

  return (
    <div className='about-wrapper'>
      <div className='spacer'></div>
      <div className='about-outer'>
        <div className='about-outer-left'></div>
        {/* content */}
        <div className='about-content raleway'>
          <div className='about-header subheader'>about</div>
          <div className='about-cols'>
            <div className='about-left'>
              <div className='about-blurb font-regular'>
                My name is Holly Figenshu, I have taken a great liking to both
                web building and website designing. I also have a deep love for
                illustration.
              </div>
              <div className='pdf-btn'>
                <a href={resume} target='_blank'>
                  .
                </a>
                <span className='font-bold'>view resume pdf</span>
                <svg
                  width='13'
                  height='14'
                  viewBox='0 0 13 14'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M0.292893 11.7929C-0.0976311 12.1834 -0.0976311 12.8166 0.292893 13.2071C0.683418 13.5976 1.31658 13.5976 1.70711 13.2071L0.292893 11.7929ZM13 1.5C13 0.947715 12.5523 0.5 12 0.5L3 0.500001C2.44771 0.5 2 0.947716 2 1.5C2 2.05228 2.44772 2.5 3 2.5L11 2.5L11 10.5C11 11.0523 11.4477 11.5 12 11.5C12.5523 11.5 13 11.0523 13 10.5L13 1.5ZM1.70711 13.2071L12.7071 2.20711L11.2929 0.792894L0.292893 11.7929L1.70711 13.2071Z' />
                </svg>
              </div>
            </div>
            {/* skillsets */}
            <div className='about-right'>
              <div className='right-bluebg' ref={bluebg}>
                {/* mobile only - skill switch */}
                <div className='skill-switch' ref={switchRef}>
                  <div className='skill-switch-bg'></div>
                  <div className='skill-switch-icons'>
                    {skillArray.map((e, index) => (
                      <div
                        className={`skill-switch-${index}`}
                        key={`skill-switch-${index}`}
                        onClick={() => skillSwitch(index)}
                      >
                        <Svg tag={skillArray[index].id} />
                      </div>
                    ))}
                  </div>
                </div>
                {/* mobile only - skill switch */}
                {/* SKILL FRAME */}
                <div className='skills-frame' {...handlers}>
                  <div className='skills-wrapper' ref={skillsWrapRef}>
                    {skillArray.map((e, index) => (
                      <div id={`skill-${index}`} key={`skill-${index}`}>
                        {/* skill header */}
                        <div className='skill-header'>
                          <div className='skill-svg'>
                            <Svg tag={e.id} />
                          </div>
                          <div className='skill-title'>{e.title}</div>
                        </div>
                        {/* skill list */}
                        <div className='skill-list'>
                          {e.list.map((l, index) => (
                            <div
                              className={`skill-${e.set}-list-${index}`}
                              key={`skill-${e.set}-list-${index}`}
                            >
                              <div className='list-name'>
                                <div className='list-svg'>
                                  <Svg tag={l.id} />
                                </div>
                                <span>{l.name}</span>
                              </div>
                              {l.sublist !== null && (
                                <ul>
                                  {l.sublist.map((s, index) => (
                                    <li key={`sublist-${index}`}>{s}</li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* end skills frame */}
                </div>
              </div>
            </div>
          </div>
          {/* end content */}
        </div>
        <div className='about-outer-right'>
          <div className='about-header subheader'>&nbsp;</div>
          <div className='outer-right-bluebg' style={{ height: height }}></div>
        </div>
      </div>
    </div>
  );
}
