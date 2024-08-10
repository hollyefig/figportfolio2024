import React, { useEffect, useState } from "react";
import "./header.css";
import headerIllust from "../../IMGs/self-illust.png";
import { gsap } from "gsap";

export default function Header() {
  //   ? Parallax scroll
  const [num, setNum] = useState(0);
  const onScroll = () => {
    const pos = window.scrollY;
    const winHeight = window.innerHeight;
    let percent = Math.floor((pos / winHeight) * 90);
    setNum(percent);
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // ? Opening animation
  useEffect(() => {
    gsap
      .timeline()
      .to(".name-holly", { duration: 3, strokeDashoffset: 0 })
      .to(".name-fig", { duration: 3, strokeDashoffset: 0 }, "<")
      .to(".header-leaf", { opacity: 0.5, duration: 3 }, "<")
      .to(".name-holly", { fill: "#457B9D", duration: 0.6, delay: 0 }, "<2.8")
      .to(".name-fig", { fill: "#18252C", duration: 0.6, delay: 0 }, "<")
      .to(".header-name", { duration: 0.5, ease: "power2.out", top: -50 })
      .to(".header-icons > div", {
        stagger: 0.2,
        duration: 0.3,
        opacity: 1,
        top: 0,
        delay: 0,
      });
  }, []);

  return (
    <div className='header-wrapper'>
      <div className='header-left'>
        <div className='header-illust-wrapper'>
          <img src={headerIllust} alt='' style={{ top: -num - 70 }} />
        </div>
      </div>

      {/* ! Right Side */}
      <div className='header-right'>
        <div className='header-right-wrapper'>
          <div className='header-leaf'></div>
          <div className='icon-name-div'>
            {/* Header name */}
            <div className='header-name'>
              <svg
                width='335'
                height='255'
                viewBox='0 0 335 255'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  className='name-holly'
                  d='M270.288 8.18384L283.022 37.2617L296.057 8.18384H317.314L292.748 55.8114V79.3745H273.296V55.6109L249.132 8.18384H270.288Z'
                />
                <path
                  className='name-holly'
                  d='M215.465 79.5918V8.40109H235.017V62.5461H267.304V79.5918H215.465Z'
                />
                <path
                  className='name-holly'
                  d='M157.985 79.5918V8.40109H177.537V62.5461H209.823V79.5918H157.985Z'
                />
                <path
                  className='name-holly'
                  d='M115.151 80.1934C109.737 80.1934 104.824 79.1907 100.412 77.1853C96 75.1131 92.1898 72.3724 88.9812 68.9633C85.8395 65.4873 83.3996 61.6103 81.6616 57.3321C79.9905 52.9872 79.1549 48.5085 79.1549 43.8962C79.1549 39.1501 80.0573 34.638 81.8622 30.3599C83.667 26.0818 86.1737 22.2716 89.3823 18.9293C92.6577 15.5201 96.5014 12.8463 100.913 10.9078C105.392 8.96926 110.272 8 115.552 8C120.967 8 125.88 9.03611 130.292 11.1083C134.704 13.1137 138.481 15.8544 141.622 19.3304C144.764 22.8063 147.17 26.7168 148.842 31.0618C150.58 35.3399 151.449 39.7517 151.449 44.2972C151.449 48.9764 150.546 53.4551 148.741 57.7332C147.003 62.0114 144.497 65.855 141.221 69.2641C138.013 72.6064 134.202 75.2802 129.791 77.2856C125.379 79.2241 120.499 80.1934 115.151 80.1934ZM99.0081 44.0967C99.0081 46.5031 99.3423 48.8427 100.011 51.1155C100.679 53.3214 101.682 55.3268 103.019 57.1316C104.356 58.8696 106.027 60.2734 108.032 61.3429C110.104 62.3456 112.544 62.8469 115.352 62.8469C118.159 62.8469 120.599 62.3122 122.671 61.2426C124.744 60.1731 126.415 58.7359 127.685 56.9311C129.022 55.0594 129.991 53.0206 130.593 50.8147C131.261 48.5419 131.595 46.2358 131.595 43.8962C131.595 41.4897 131.261 39.1835 130.593 36.9776C129.924 34.7717 128.922 32.7998 127.585 31.0618C126.248 29.2569 124.543 27.8532 122.471 26.8505C120.399 25.8478 117.992 25.3465 115.252 25.3465C112.444 25.3465 110.004 25.8812 107.932 26.9508C105.927 28.0203 104.255 29.4575 102.919 31.2623C101.582 33.0003 100.579 35.0057 99.9105 37.2784C99.3089 39.4843 99.0081 41.7571 99.0081 44.0967Z'
                />
                <path
                  className='name-holly'
                  d='M73.9687 8.40109V79.5918H54.4163V51.7171H30.5524V79.5918H11V8.40109H30.5524V34.6715H54.4163V8.40109H73.9687Z'
                />
                <path
                  className='name-fig'
                  d='M227.339 241.889C235.995 245.187 245.063 246.836 254.544 246.836C268.078 246.836 280.1 242.422 290.611 233.596V245.805H323.793V167.9H263.612V196.754H289.024C285.194 200.725 281.052 203.954 276.596 206.441C270.688 209.601 264.505 211.181 258.048 211.181C252.964 211.181 248.361 210.288 244.239 208.502C240.117 206.578 236.545 203.967 233.522 200.67C230.637 197.235 228.369 193.182 226.721 188.51C225.072 183.839 224.248 178.617 224.248 172.847C224.248 167.213 225.003 162.061 226.515 157.389C228.163 152.58 230.43 148.459 233.316 145.024C236.339 141.589 239.842 138.909 243.827 136.986C247.811 135.062 252.208 134.1 257.017 134.1C263.475 134.1 269.589 135.887 275.36 139.459C281.13 142.894 285.459 147.497 288.344 153.267L318.228 130.391C313.007 120.498 305.038 112.735 294.321 107.102C283.604 101.331 271.65 98.4455 258.46 98.4455C247.88 98.4455 238.056 100.3 228.988 104.01C219.919 107.72 211.95 112.941 205.08 119.674C198.348 126.269 193.058 133.963 189.211 142.756C185.364 151.55 183.44 161.099 183.44 171.404C183.44 183.358 185.295 194.006 189.005 203.349C192.852 212.555 198.073 220.455 204.668 227.05C211.263 233.508 218.82 238.454 227.339 241.889Z'
                />
                <path
                  className='name-fig'
                  d='M127.602 245.805V99.476H167.791V245.805H127.602Z'
                />
                <path
                  className='name-fig'
                  d='M11 245.805V99.476H111.37V134.513H51.189V158.832H100.24V191.396H51.189V245.805H11Z'
                />
              </svg>
            </div>
            <div className='header-icons'>
              <div className='header-icon-art'>
                <svg
                  width='90'
                  height='91'
                  viewBox='0 0 90 91'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g clipPath='url(#clip0_53_775)'>
                    <path
                      d='M26.2429 53.1007C20.0195 53.1007 14.9958 58.1245 14.9958 64.3479C14.9958 69.2591 10.6469 71.8459 7.49768 71.8459C10.9468 76.4198 16.8328 79.344 22.4938 79.344C30.7792 79.344 37.49 72.6332 37.49 64.3479C37.49 58.1245 32.4663 53.1007 26.2429 53.1007ZM77.6422 17.9723L72.6185 12.9486C71.1563 11.4864 68.7944 11.4864 67.3323 12.9486L33.7409 46.5399L44.0508 56.8498L77.6422 23.2584C79.1043 21.7963 79.1043 19.4344 77.6422 17.9723Z'
                      fill='#E63946'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_53_775'>
                      <rect
                        width='89.9769'
                        height='89.9769'
                        fill='white'
                        transform='translate(0 0.614197)'
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className='header-icon-code'>
                <svg
                  width='101'
                  height='100'
                  viewBox='0 0 101 100'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M25.7778 24.8013C25.7778 22.6088 26.6488 20.506 28.1991 18.9556C29.7495 17.4052 31.8523 16.5342 34.0449 16.5342C35.1411 16.5342 36.1925 16.0987 36.9677 15.3235C37.7429 14.5483 38.1784 13.497 38.1784 12.4007C38.1784 11.3044 37.7429 10.253 36.9677 9.47781C36.1925 8.70262 35.1411 8.26712 34.0449 8.26712C29.6597 8.26712 25.4542 10.0091 22.3534 13.1099C19.2526 16.2106 17.5106 20.4162 17.5106 24.8013V37.202C17.5106 39.3946 16.6397 41.4973 15.0893 43.0477C13.5389 44.5981 11.4361 45.4691 9.24354 45.4691C8.14725 45.4691 7.09587 45.9046 6.32068 46.6798C5.54548 47.455 5.10999 48.5064 5.10999 49.6026C5.10999 50.6989 5.54548 51.7503 6.32068 52.5255C7.09587 53.3007 8.14725 53.7362 9.24354 53.7362C11.4361 53.7362 13.5389 54.6072 15.0893 56.1576C16.6397 57.708 17.5106 59.8107 17.5106 62.0033V74.404C17.5106 78.7891 19.2526 82.9947 22.3534 86.0954C25.4542 89.1962 29.6597 90.9382 34.0449 90.9382C35.1411 90.9382 36.1925 90.5027 36.9677 89.7275C37.7429 88.9523 38.1784 87.9009 38.1784 86.8046C38.1784 85.7083 37.7429 84.657 36.9677 83.8818C36.1925 83.1066 35.1411 82.6711 34.0449 82.6711C31.8523 82.6711 29.7495 81.8001 28.1991 80.2497C26.6488 78.6993 25.7778 76.5965 25.7778 74.404V62.0033C25.7645 59.6494 25.2487 57.3254 24.265 55.1869C23.2812 53.0483 21.8522 51.1445 20.0735 49.6026C21.8522 48.0608 23.2812 46.157 24.265 44.0184C25.2487 41.8799 25.7645 39.5559 25.7778 37.202V24.8013ZM91.9146 45.4691C89.722 45.4691 87.6193 44.5981 86.0689 43.0477C84.5185 41.4973 83.6475 39.3946 83.6475 37.202V24.8013C83.6475 20.4162 81.9055 16.2106 78.8047 13.1099C75.704 10.0091 71.4984 8.26712 67.1133 8.26712C66.017 8.26712 64.9656 8.70262 64.1904 9.47781C63.4152 10.253 62.9797 11.3044 62.9797 12.4007C62.9797 13.497 63.4152 14.5483 64.1904 15.3235C64.9656 16.0987 66.017 16.5342 67.1133 16.5342C69.3059 16.5342 71.4086 17.4052 72.959 18.9556C74.5094 20.506 75.3804 22.6088 75.3804 24.8013V37.202C75.3937 39.5559 75.9094 41.8799 76.8932 44.0184C77.8769 46.157 79.3059 48.0608 81.0847 49.6026C79.3059 51.1445 77.8769 53.0483 76.8932 55.1869C75.9094 57.3254 75.3937 59.6494 75.3804 62.0033V74.404C75.3804 76.5965 74.5094 78.6993 72.959 80.2497C71.4086 81.8001 69.3059 82.6711 67.1133 82.6711C66.017 82.6711 64.9656 83.1066 64.1904 83.8818C63.4152 84.657 62.9797 85.7083 62.9797 86.8046C62.9797 87.9009 63.4152 88.9523 64.1904 89.7275C64.9656 90.5027 66.017 90.9382 67.1133 90.9382C71.4984 90.9382 75.704 89.1962 78.8047 86.0954C81.9055 82.9947 83.6475 78.7891 83.6475 74.404V62.0033C83.6475 59.8107 84.5185 57.708 86.0689 56.1576C87.6193 54.6072 89.722 53.7362 91.9146 53.7362C93.0109 53.7362 94.0623 53.3007 94.8375 52.5255C95.6127 51.7503 96.0482 50.6989 96.0482 49.6026C96.0482 48.5064 95.6127 47.455 94.8375 46.6798C94.0623 45.9046 93.0109 45.4691 91.9146 45.4691Z'
                    fill='#E63946'
                    stroke='#E63946'
                    strokeWidth='3.74904'
                  />
                </svg>
              </div>
              {/* END header icons */}
            </div>
          </div>
          {/* END header right wrapper */}
        </div>
        {/* END header right */}
      </div>
    </div>
  );
}