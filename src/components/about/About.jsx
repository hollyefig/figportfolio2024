import React, { useEffect, useRef, useState } from "react";
import "./about.css";
import { skillArray } from "./skills";
import Svg from "../Svg";

export default function About() {
  const bluebg = useRef(null);
  const [height, setHeight] = useState("auto");

  useEffect(() => {
    window.addEventListener("resize", () => {
      setHeight(bluebg.current.getBoundingClientRect().height + "px");
    });
    setHeight(bluebg.current.getBoundingClientRect().height + "px");
  }, []);

  return (
    <div className='about-wrapper'>
      <Svg />
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
                <a
                  href='/Users/hollyfigenshu/Desktop/Web Work/code/figportfolio2024/src/IMGs/resume2024.pdf'
                  target='_blank'
                ></a>
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
                <div className='skills-wrapper'>
                  <div className='skills-left'>left</div>
                  <div className='skills-right'>right</div>
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
