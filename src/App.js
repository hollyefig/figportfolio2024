import { useEffect, useState } from "react";
import Nav from "./components/nav/Nav";
import Header from "./components/header/Header";
import Work from "./components/work/Work";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function App() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrollToPlugin);
  const [mob, setMob] = useState(null);
  const [navbg, setNavbg] = useState(false);

  //   ? perform actions on scroll
  const onScroll = () => {
    if (!mob && window.scrollY > 50) {
      setNavbg(true);
    } else if (!mob && window.scrollY < 50) {
      setNavbg(false);
    }
  };

  //   ? detect mobile on resize
  const onResize = (e) => {
    let win = e.target.innerWidth;
    win <= 768 ? setMob(true) : setMob(false);
  };

  //   ! on render
  useEffect(() => {
    let win = window.innerWidth;
    win <= 768 ? setMob(true) : setMob(false);
    window.addEventListener("scroll", () => onScroll());
    window.addEventListener("resize", (e) => onResize(e));

    return () => {
      window.removeEventListener("scroll", () => onScroll());
      window.removeEventListener("resize", () => onResize());
    };
  }, []);

  useEffect(() => {
    let isMob = false;

    if (window.innerWidth <= 425) {
      isMob = true;
    }

    // work
    gsap.to(".work-content > div:not(:nth-child(2))", {
      scrollTrigger: {
        trigger: ".gallery-prev-wrapper",
        start: "bottom bottom",
      },
      opacity: 1,
      stagger: 0.2,
      duration: 0.5,
      top: 0,
    });

    // about
    const tlAbout = gsap.timeline({
      scrollTrigger: {
        trigger: ".skills-wrapper",
        start: isMob ? "top bottom" : "bottom bottom",
      },
      defaults: {
        ease: "power2.out",
        delay: 0,
        duration: 0.3,
      },
    });
    tlAbout
      .to(".about-header", {
        opacity: 1,
      })
      .to(".about-left", { opacity: 1 })
      .to(".right-bluebg", { width: "100%", duration: 1 }, "<")
      .to(".skills-frame", { opacity: 1 })
      .to(".skill-switch", { opacity: 1 }, "<");

    // contact
    gsap.to(".contact-content .subheader, .contact-grid > div", {
      scrollTrigger: {
        trigger: ".contact-icons",
        start: "center bottom",
      },
      opacity: 1,
      stagger: 0.4,
    });
  }, []);

  // * GSAP scrollTo
  const scrollTo = (e) => {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: `#${e}`, offsetY: e === "work-wrapper" ? 50 : 25 },
      ease: "power2.out",
    });
  };

  return (
    <>
      <Nav bg={navbg} mob={mob} scrollTo={scrollTo} />
      <Header />
      <div className='spacer'></div>
      <Work />
      <About />
      <Contact />
    </>
  );
}
export default App;
