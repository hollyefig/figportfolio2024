import React from "react";
import Svgset from "./Svgset";

export default function Svg({ tag }) {
  return (
    <>
      <Svgset />
      <svg
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        className='icon'
      >
        <use href={`#${tag}`}></use>
      </svg>
    </>
  );
}
