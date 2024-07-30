import React from "react";

export default function Display({ selected }) {
  console.log(selected);
  return (
    <div className='display-wrapper'>
      <div className='display-left'>
        <div className='left-leaf-bg'></div>
        <div className='left-display-div'>
          {selected !== null &&
            (selected.type === 1 ? (
              <img
                src={selected.display}
                style={{ height: "430px", width: "auto" }}
                alt=''
              />
            ) : (
              <img
                src={selected.display}
                style={{ height: "auto", width: "100%" }}
                alt=''
              />
            ))}
        </div>
      </div>
      <div className='display-right raleway'>
        <div className='display-right-content'>
          <div className='display-name font-bold'>name</div>
          <div className='display-desc font-regular'>desc</div>
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
            </div>
            <div className='github-btn-wrapper'>
              <div className='github-btn-content'>
                <div className='github-btn-copy font-bold'>view github</div>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
