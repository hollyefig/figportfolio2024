import React from "react";
import "./nav.css";

export default function Nav() {
  return (
    <div className='nav-wrapper'>
      <div className='nav-inner'>
        <div className='nav-bg'></div>
        <div className='nav-content-wrap'>
          <div className='nav-content'>
            <div id='nav-work' className='raleway font-bold'>
              work
            </div>
            <div id='nav-about' className='raleway font-bold'>
              about
            </div>
            <div id='nav-contact' className='raleway font-bold'>
              contact
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
