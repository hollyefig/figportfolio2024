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
