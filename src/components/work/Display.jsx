import React, { useState } from "react";
import { gsap } from "gsap";
import { useSwipeable } from "react-swipeable";

export default function Display({ selected, displayRef }) {
  const [sliderCurr, setSliderCurr] = useState(0);

  // & gallery directional select
  const galleryArrow = (dir) => {
    const tl = gsap.timeline({
      defaults: { duration: 0.2, delay: 0, ease: "power2.out" },
    });
    if (dir === "right") {
      if (selected.display.length - 1 !== sliderCurr) {
        tl.to("#galleryImg", { x: -20, opacity: 0 })
          .add(() => setSliderCurr((prev) => prev + 1))
          .to("#galleryImg", { x: 20 })
          .to("#galleryImg", { x: 0 })
          .to("#galleryImg", { opacity: 1 }, "<");
      }
    }
    if (dir === "left") {
      if (0 !== sliderCurr) {
        tl.to("#galleryImg", { x: 20, opacity: 0 })
          .add(() => setSliderCurr((prev) => prev - 1))
          .to("#galleryImg", { x: -20 })
          .to("#galleryImg", { x: 0 })
          .to("#galleryImg", { opacity: 1 }, "<");
      }
    }
  };

  // ? Swipe
  const handlers = useSwipeable({
    onSwipedLeft: () => galleryArrow("right"),
    onSwipedRight: () => galleryArrow("left"),
    trackMouse: true,
    preventDefaultTouchmoveEvent: true,
  });

  return (
    <div className='display-wrapper' ref={displayRef}>
      {selected !== null && (
        <>
          <div className='display-left'>
            <div className='left-leaf-bg'></div>
            <div className='left-display-div'>
              {/* if display type is art */}
              {selected.type === 1 ? (
                // for single img showcase
                <>
                  {selected.display.length <= 1 ? (
                    <img
                      src={selected.display}
                      style={{ height: "430px", width: "auto" }}
                      alt=''
                      className='mobileResizeImg'
                    />
                  ) : (
                    // & mutliple image showcase
                    <>
                      <div className='slider-outer-frame'>
                        <div
                          className='slider-btn-left'
                          onClick={() => galleryArrow("left")}
                        >
                          <svg
                            width='21'
                            height='16'
                            viewBox='0 0 21 16'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M19.5 9.05882C20.0848 9.05882 20.5588 8.58477 20.5588 8C20.5588 7.41523 20.0848 6.94118 19.5 6.94118V9.05882ZM0.751299 7.2513C0.337802 7.6648 0.337802 8.3352 0.751299 8.7487L7.48961 15.487C7.90311 15.9005 8.57352 15.9005 8.98701 15.487C9.40051 15.0735 9.40051 14.4031 8.98701 13.9896L2.9974 8L8.98701 2.01039C9.40051 1.59689 9.40051 0.926484 8.98701 0.512987C8.57352 0.0994912 7.90311 0.0994912 7.48961 0.512987L0.751299 7.2513ZM19.5 6.94118L1.5 6.94118V9.05882L19.5 9.05882V6.94118Z'
                              fill='#F1FAEE'
                            />
                          </svg>
                        </div>
                        <div className='swipeDiv' {...handlers}>
                          {/* & */}
                          <img
                            src={selected.display[sliderCurr]}
                            style={{ height: "430px", width: "auto" }}
                            alt=''
                            className='mobileResizeImg'
                            id='galleryImg'
                            draggable='false'
                          />
                        </div>
                        <div
                          className='slider-btn-right'
                          onClick={() => galleryArrow("right")}
                        >
                          <svg
                            width='21'
                            height='16'
                            viewBox='0 0 21 16'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M1.5 9.05882C0.915228 9.05882 0.441177 8.58477 0.441177 8C0.441177 7.41523 0.915228 6.94118 1.5 6.94118L1.5 9.05882ZM20.2487 7.2513C20.6622 7.6648 20.6622 8.3352 20.2487 8.7487L13.5104 15.487C13.0969 15.9005 12.4265 15.9005 12.013 15.487C11.5995 15.0735 11.5995 14.4031 12.013 13.9896L18.0026 8L12.013 2.01039C11.5995 1.59689 11.5995 0.926484 12.013 0.512987C12.4265 0.0994912 13.0969 0.0994912 13.5104 0.512987L20.2487 7.2513ZM1.5 6.94118L19.5 6.94118V9.05882L1.5 9.05882L1.5 6.94118Z'
                              fill='#F1FAEE'
                            />
                          </svg>
                        </div>
                      </div>
                      <div className='slider-prog'>
                        {selected.display.map((e, index) => (
                          <div
                            key={`slider-${index}`}
                            className={
                              index === sliderCurr ? `slider-current` : ""
                            }
                          ></div>
                        ))}
                      </div>
                    </>
                  )}
                </>
              ) : (
                // if display type is web
                <img
                  src={selected.display}
                  style={{ height: "auto", maxWidth: "520px", width: "100%" }}
                  alt=''
                />
              )}
            </div>
          </div>
          <div className='display-right raleway'>
            <div className='display-right-content'>
              <div className='display-name font-bold'>{selected.name}</div>
              <div className='display-desc font-regular'>{selected.desc}</div>
              <div className='display-tools font-bold'>
                {selected.tools.map((e, index) => (
                  <div datatype={`tools-${index}`} key={`tools-${index}`}>
                    {e}
                  </div>
                ))}
              </div>
              {/* butttons if apply */}
              {selected.type === 2 && (
                <div className='display-buttons-div'>
                  <div className='site-btn-wrapper'>
                    <div className='site-btn-content'>
                      <div className='site-btn-copy font-bold'>view site</div>
                      <div className='site-btn-icon'>
                        <svg
                          width='13'
                          height='13'
                          viewBox='0 0 13 13'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path d='M0.292893 11.2929C-0.0976311 11.6834 -0.0976311 12.3166 0.292893 12.7071C0.683418 13.0976 1.31658 13.0976 1.70711 12.7071L0.292893 11.2929ZM13 1C13 0.447715 12.5523 2.00008e-07 12 -5.28728e-08L3 7.47917e-07C2.44771 4.10743e-07 2 0.447716 2 1C2 1.55228 2.44772 2 3 2L11 2L11 10C11 10.5523 11.4477 11 12 11C12.5523 11 13 10.5523 13 10L13 1ZM1.70711 12.7071L12.7071 1.70711L11.2929 0.292894L0.292893 11.2929L1.70711 12.7071Z' />
                        </svg>
                      </div>
                    </div>
                    <a
                      href={selected.url}
                      target='_blank'
                      rel='noreferrer'
                      className='btn-link'
                    >
                      &nbsp;
                    </a>
                  </div>

                  <div className='github-btn-wrapper'>
                    <div className='github-btn-content'>
                      <div className='github-btn-copy font-bold'>
                        view github
                      </div>
                      <div className='github-btn-icon'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='30'
                          height='31'
                          viewBox='0 0 30 31'
                          fill='none'
                        >
                          <path d='M15 3.5C8.373 3.5 3 8.873 3 15.5C3 21.123 6.872 25.828 12.092 27.13C12.036 26.968 12 26.78 12 26.547V24.496C11.513 24.496 10.697 24.496 10.492 24.496C9.671 24.496 8.941 24.143 8.587 23.487C8.194 22.758 8.126 21.643 7.152 20.961C6.863 20.734 7.083 20.475 7.416 20.51C8.031 20.684 8.541 21.106 9.021 21.732C9.499 22.359 9.724 22.501 10.617 22.501C11.05 22.501 11.698 22.476 12.308 22.38C12.636 21.547 13.203 20.78 13.896 20.418C9.9 20.007 7.993 18.019 7.993 15.32C7.993 14.158 8.488 13.034 9.329 12.087C9.053 11.147 8.706 9.23 9.435 8.5C11.233 8.5 12.32 9.666 12.581 9.981C13.477 9.674 14.461 9.5 15.495 9.5C16.531 9.5 17.519 9.674 18.417 9.983C18.675 9.67 19.763 8.5 21.565 8.5C22.297 9.231 21.946 11.156 21.667 12.094C22.503 13.039 22.995 14.16 22.995 15.32C22.995 18.017 21.091 20.004 17.101 20.417C18.199 20.99 19 22.6 19 23.813V26.547C19 26.651 18.977 26.726 18.965 26.815C23.641 25.176 27 20.736 27 15.5C27 8.873 21.627 3.5 15 3.5Z' />
                        </svg>
                      </div>
                    </div>
                    <a
                      href={selected.repo}
                      target='_blank'
                      rel='noreferrer'
                      className='btn-link'
                    >
                      &nbsp;
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
