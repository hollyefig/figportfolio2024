import pokePartyPrev from "../../IMGs/gallery/prevs/pokeparty-prev.jpg";
import pokePartyDisplay from "../../IMGs/gallery/displays/pokeparty.png";
import zelinkVectorPrev from "../../IMGs/gallery/prevs/zelink-vector-prev.jpg";
import zelinkVectorDisplay from "../../IMGs/gallery/displays/zelink-vector.png";
import weatherPrev from "../../IMGs/gallery/prevs/weather-prev.jpg";
import weatherDisplay from "../../IMGs/gallery/displays/weather.png";

export const galleryData = [
  {
    name: "Poke Party",
    type: 2,
    prev: pokePartyPrev,
    display: pokePartyDisplay,
    tools: ["React Framework", "Pokemon API"],
    desc: "This project was created as a way for me to practice Javascript and React. Grabbing data from a Pokemon API, this site has the user build their own Pokemon Party through randomizing Pokemon selection.",
    url: "https://hollyefig.github.io/pokeParty/",
    repo: "https://github.com/hollyefig/pokeParty",
  },
  {
    name: "Zelda & Link Vector Illustration",
    type: 1,
    prev: zelinkVectorPrev,
    display: zelinkVectorDisplay,
    tools: ["Figma"],
    desc: "desc",
    url: null,
    repo: null,
  },
  {
    name: "Weather App",
    type: 2,
    prev: weatherPrev,
    display: weatherDisplay,
    tools: ["React Framework", "Weather API"],
    desc: "desc",
    url: "https://hollyefig.github.io/weather/",
    repo: "https://github.com/hollyefig/weather",
  },
];
