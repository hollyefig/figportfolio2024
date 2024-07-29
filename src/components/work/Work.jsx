import React, { useState, useEffect, useRef } from "react";
import "./work.css";

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

  return (
    <div className='work-wrapper'>
      <div className='work-content'>
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
        </div>
      </div>
    </div>
  );
}
