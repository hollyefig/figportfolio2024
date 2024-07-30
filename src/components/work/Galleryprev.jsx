import React from "react";
import { gsap } from "gsap";

export default function Galleryprev({ data, num, length, galleryClick }) {
  const mouseOver = (e) => {
    gsap.to(e.target, { opacity: 1 });
  };
  const mouseLeave = (e) => {
    gsap.to(e.target, { opacity: 0.4 });
  };

  return (
    <div
      onMouseOver={(e) => {
        mouseOver(e);
      }}
      onMouseLeave={(e) => {
        mouseLeave(e);
      }}
      onClick={() => galleryClick(data)}
      className='gallery-thumb'
      style={{
        backgroundImage: `url(${data.prev})`,
        gridTemplateColumns: `repeat(${length}, 234px)`,
      }}
    ></div>
  );
}
