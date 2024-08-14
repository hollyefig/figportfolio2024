import pokePartyPrev from "../../IMGs/gallery/prevs/pokeparty-prev.jpg";
import pokePartyDisplay from "../../IMGs/gallery/displays/pokeparty.png";
import zelinkVectorPrev from "../../IMGs/gallery/prevs/zelink-vector-prev.jpg";
import zelinkVectorDisplay from "../../IMGs/gallery/displays/zelink-vector.png";
import zelinkVectorDisplay2 from "../../IMGs/gallery/displays/zelink-vector2024-2.jpg";
import weatherPrev from "../../IMGs/gallery/prevs/weather-prev.jpg";
import weatherDisplay from "../../IMGs/gallery/displays/weather.png";
import aerithPrev from "../../IMGs/gallery/prevs/aerith-prev.jpg";
import aerithDisplay from "../../IMGs/gallery/displays/aerith.png";
import avroviaPrev from "../../IMGs/gallery/prevs/avrovia-prev.jpg";
import avroviaDisplay from "../../IMGs/gallery/displays/avrovia.png";
import zeldaPrev from "../../IMGs/gallery/prevs/zeldaEchoes-prev.jpg";
import zeldaDisplay from "../../IMGs/gallery/displays/zeldaEchoes.png";
import pokeRosterPrev from "../../IMGs/gallery/prevs/pokeroster-prev.jpg";
import pokeRosterDisplay from "../../IMGs/gallery/displays/pokeroster.png";
import endwalkerPrev from "../../IMGs/gallery/prevs/endwalker-prev.jpg";
import endwalkerDisplay from "../../IMGs/gallery/displays/endwalker.png";
import todoPrev from "../../IMGs/gallery/prevs/todo-prev.jpg";
import todoDisplay from "../../IMGs/gallery/displays/todo.png";
import zelinkIllustPrev from "../../IMGs/gallery/prevs/zelink-illust-prev.jpg";
import zelinkIllustDisplay from "../../IMGs/gallery/displays/zelLink-illust.png";
import dtPrev from "../../IMGs/gallery/prevs/dt-prev.png";
import dt1 from "../../IMGs/gallery/displays/dt-1.png";
import dt2 from "../../IMGs/gallery/displays/dt-2.png";
import dt3 from "../../IMGs/gallery/displays/dt-3.png";
import dt4 from "../../IMGs/gallery/displays/dt-4.png";

export const galleryData = [
  {
    name: "Poke Party Site",
    type: 2,
    prev: pokePartyPrev,
    display: pokePartyDisplay,
    tools: ["React Framework", "Pokemon API"],
    desc: "This project was created as a way for me to practice Javascript and React. Grabbing data from a Pokemon API, this site has the user build their own Pokemon Party through randomizing Pokemon selection.",
    url: "https://hollyefig.github.io/pokeParty/",
    repo: "https://github.com/hollyefig/pokeParty",
    id: "pokeParty",
  },
  {
    name: "Zelda & Link Vector Illustration",
    type: 1,
    prev: zelinkVectorPrev,
    display: [zelinkVectorDisplay, zelinkVectorDisplay2],
    tools: ["Figma", "Procreate"],
    desc: "I created this illustration as a way to practice with limited palettes and familiarize myself with using Figma as a vectoring program. The sketch was done initially in Procreate, and then brought into Figma where I used 6 colors total to vector out the illustration",
    url: null,
    repo: null,
    id: "zelinkVector",
  },
  {
    name: "Weather App",
    type: 2,
    prev: weatherPrev,
    display: weatherDisplay,
    tools: ["React Framework", "Weather API", "React Select"],
    desc: "Part of The Odin Project's React curriculum, this app's utilizes a weather API to provide live data of weather worldwide. Built in the React framework, the user can input either town name or zip to view the weather, bookmark their preferred places, and switch between F˚ and C˚ instantly. The UI also changes depending on the time of day of the entered location.",
    url: "https://hollyefig.github.io/weather/",
    repo: "https://github.com/hollyefig/weather",
    id: "weatherApp",
  },
  {
    name: "Dawntrail",
    type: 1,
    prev: dtPrev,
    display: [dt1, dt2, dt3, dt4],
    tools: ["iPad & Procreate", "Figma"],
    desc: "Vector illustrations of my character from Final Fantasy XIV and her outfits worn throughout the Danwtrail expansion. Initially sketched in Procreate, the illustrations were brought into Figma for vectoring. The key features of this art is using a limited 5-color palette for each, as well as a strong emphasis on angles.",
    url: null,
    repo: null,
    id: "dt",
  },
  {
    name: "Aerith Illustration",
    type: 1,
    prev: aerithPrev,
    display: [aerithDisplay],
    tools: ["iPad & Procreate"],
    desc: "An illustration of Aerith, a beloved character from one of my favorite video games. I wanted the piece to feel as though the figure felt flat and 2-dimensional to try and showcase a neat structure.",
    url: null,
    repo: null,
    id: "aerithIllust",
  },
  {
    name: "Avrovia - DnD Podcast Site",
    type: 2,
    prev: avroviaPrev,
    display: avroviaDisplay,
    tools: [
      "React Framework",
      "Figma",
      "iPad & Procreate",
      "GSAP & scrollTo, scrollTrigger",
    ],
    desc: "A mock 'Podcast' website created for my Dungeons & Dragons group. The DnD campaign takes place in Faerun, where there is much emphasis on natural earthly beauty. The site was designed using Figma, along with the card illustrations utilizing Figma's vector tools. Characters were then illustrated in Procreate and brought into the design. When coding the site, I emphasized use of GSAP's scrollTrigger to bring more animated life to the page as the user scrolls through.",
    url: "https://hollyefig.github.io/avrovia/",
    repo: "https://github.com/hollyefig/avrovia",
    id: "avrovia",
  },
  {
    name: "Zelda Illustration",
    type: 1,
    prev: zeldaPrev,
    display: [zeldaDisplay],
    tools: ["iPad & Procreate"],
    desc: "An illustration of the design for Princess Zelda in Legend of Zelda: Echoes of Wisdom.",
    url: null,
    repo: null,
    id: "zeldaEchoes",
  },
  {
    name: "Pokemon Roster Builder Site",
    type: 2,
    prev: pokeRosterPrev,
    display: pokeRosterDisplay,
    tools: ["Pokemon API", "localStorage()"],
    desc: "This page was created to practice working with localStorage() and more use of APis. Users can create their own Pokemon rosters by giving the roster a name, color identity, choosing the game and finally choosing their pokemon and the pokemon's preferred moveset. Once users are finished with the process, the roster is created and stored into the local storage of the device they are using.",
    url: "https://hollyefig.github.io/pokemonRoster/",
    repo: "https://github.com/hollyefig/pokemonRoster",
    id: "pokeRoster",
  },
  {
    name: "Endwalker Illustration",
    type: 1,
    prev: endwalkerPrev,
    display: [endwalkerDisplay],
    tools: ["iPad & Procreate"],
    desc: "An illustration create to commemorate Final Fantasy XIV's 4th expansion, Endwalker. Featured in the illustration is a single character with her 2 forms on display. The illustration was great practice in creating figures that melt into the black shadow of the background.",
    url: null,
    repo: null,
    id: "endwalker",
  },
  {
    name: "To-Do List Site",
    type: 2,
    prev: todoPrev,
    display: todoDisplay,
    tools: ["JS Object practice"],
    desc: "From The Odin Project's Object Oriented Principles course, this website was a practice in creating objects from data input and being able to post, edit, organize, and delete them. In addition to organizing the data, the project also utilizes css animations based on conditions that execute through javascript.",
    url: "https://hollyefig.github.io/todolist/",
    repo: "https://github.com/hollyefig/todolist",
    id: "todo",
  },
  {
    name: "Zelda & Link Illustration",
    type: 1,
    prev: zelinkIllustPrev,
    display: [zelinkIllustDisplay],
    tools: ["iPad & Procreate"],
    desc: "An illustration of my 2 beloved video game characters, Link & Zelda. The illustration emphasizes a limited color palette and light, almost cel-like shading.",
    url: null,
    repo: null,
    id: "zelinkIllust",
  },
];
