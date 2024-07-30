import { useEffect, useState } from "react";
import Nav from "./components/nav/Nav";
import Header from "./components/header/Header";
import Work from "./components/work/Work";

function App() {
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

  return (
    <>
      <Nav bg={navbg} mob={mob} />
      <Header />
      <div className='spacer'></div>
      <Work />
    </>
  );
}
export default App;
