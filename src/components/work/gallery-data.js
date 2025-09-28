// import aerithPrev from "../../IMGs/gallery/prevs/aerith-prev.jpg";
// import aerithDisplay from "../../IMGs/gallery/displays/aerith.png";
// import rdmPrev from "../../IMGs/gallery/prevs/rdm-prev.jpg";
// import rdm from "../../IMGs/gallery/displays/rdm.png";
// import zeldaPrev from "../../IMGs/gallery/prevs/zeldaEchoes-prev.jpg";
// import zeldaDisplay from "../../IMGs/gallery/displays/zeldaEchoes.png";
// import zelinkIllustPrev from "../../IMGs/gallery/prevs/zelink-illust-prev.jpg";
// import zelinkIllustDisplay from "../../IMGs/gallery/displays/zelLink-illust.png";
// import endwalkerPrev from "../../IMGs/gallery/prevs/endwalker-prev.jpg";
// import endwalkerDisplay from "../../IMGs/gallery/displays/endwalker.png";
import pokePartyPrev from "../../IMGs/gallery/prevs/pokeparty-prev.jpg";
import pokePartyDisplay from "../../IMGs/gallery/displays/pokeparty.png";
import zelinkVectorPrev from "../../IMGs/gallery/prevs/zelink-vector-prev.jpg";
import zelinkVectorDisplay from "../../IMGs/gallery/displays/zelink-vector.png";
import zelinkVectorDisplay2 from "../../IMGs/gallery/displays/zelink-vector2024-2.jpg";
import weatherPrev from "../../IMGs/gallery/prevs/weather-prev.jpg";
import weatherDisplay from "../../IMGs/gallery/displays/weather.png";
import avroviaPrev from "../../IMGs/gallery/prevs/avrovia-prev.jpg";
import avroviaDisplay from "../../IMGs/gallery/displays/avrovia.png";
import pokeRosterPrev from "../../IMGs/gallery/prevs/pokeroster-prev.jpg";
import pokeRosterDisplay from "../../IMGs/gallery/displays/pokeroster.png";
import todoPrev from "../../IMGs/gallery/prevs/todo-prev.jpg";
import todoDisplay from "../../IMGs/gallery/displays/todo.png";
import dtPrev from "../../IMGs/gallery/prevs/dt-prev.png";
import dt1 from "../../IMGs/gallery/displays/dt-1.png";
import dt2 from "../../IMGs/gallery/displays/dt-2.png";
import dt3 from "../../IMGs/gallery/displays/dt-3.png";
import dt4 from "../../IMGs/gallery/displays/dt-4.png";
import wolCardPrev from "../../IMGs/gallery/prevs/wol-card-prev.jpg";
import rdmCard from "../../IMGs/gallery/displays/rdm-card-set.png";
import whmCard from "../../IMGs/gallery/displays/whm-card-set.png";
import warCard from "../../IMGs/gallery/displays/war-card-set.png";
import astCard from "../../IMGs/gallery/displays/ast-card-set.png";
import cardSetSketches from "../../IMGs/gallery/displays/card-set-sketches.png";
import whm2025Prev from "../../IMGs/gallery/prevs/whm-2025-prev.jpg";
import whm20251 from "../../IMGs/gallery/displays/whm-2025-1.jpg";
import whm20252 from "../../IMGs/gallery/displays/whm-2025-2.jpg";
import witchPrev from "../../IMGs/gallery/prevs/witch-prev.jpg";
import witch from "../../IMGs/gallery/displays/witch.jpg";
import zelinkAccordionPrev from "../../IMGs/gallery/prevs/zelink-accordion-prev.jpg";
import zelinkAccordion from "../../IMGs/gallery/displays/zelink-accordion.jpg";
import silksongPrev from "../../IMGs/gallery/prevs/silksong-prev.jpg";
import silksong from "../../IMGs/gallery/displays/silksong.jpg";

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
    name: "White Mage",
    type: 1,
    prev: whm2025Prev,
    display: [whm20251, whm20252],
    tools: ["iPad & Procreate"],
    desc: "My player character from Final Fantasy XIV as the Red Mage class. I really enjoy creating a composition where the main character is breaking out of their background a bit to give extra focus on them. I also wanted to try and use at little color variety as possible to challenge myself in creating an interesting visual on strong values.",
    url: null,
    repo: null,
    id: "whm2025",
  },
  {
    name: "Warrior of Light Cards",
    type: 1,
    prev: wolCardPrev,
    display: [rdmCard, whmCard, warCard, astCard, cardSetSketches],
    tools: ["iPad & Procreate", "Figma"],
    desc: "My player character from Final Fantasy XIV in the many fighter classes that she plays. Each card uses a 5-color palette, with a strong focus on 1 definitive color per card. The characters were illustrated in Procreate, then brought into Figma for vectoring.",
    url: null,
    repo: null,
    id: "wolCards",
  },
  {
    name: "Witch Illustration",
    type: 1,
    prev: witchPrev,
    display: [witch],
    tools: ["iPad & Procreate"],
    desc: "This piece was a Draw This In Your Style challenge, originating from @haneul_artbox on Instagram. The fun, yet simple character design with an appealing color pallete really drew me into creating this. The background was a great challenge in creating layered leaves and using value to make them slowly disappear into the background.",
    url: null,
    repo: null,
    id: "witch",
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
    prev: zelinkAccordionPrev,
    display: [zelinkAccordion],
    tools: ["iPad & Procreate"],
    desc: "The Legend of Zelda is one of my favorite video game franchises, and I really loved the variety of outfits given to Zelda and Link. One of those outfit sets are the Royal uniforms that showcase great design and sophistication. For this piece, I took great inspiration from J.C. Leyendecker's style of brush strokes to create the texture of the painting.",
    url: null,
    repo: null,
    id: "zelinkAccordion",
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
    name: "Silksong Illustration",
    type: 1,
    prev: silksongPrev,
    display: [silksong],
    tools: ["iPad & Procreate"],
    desc: "I've always been a huge fan of Metroidvania-type video games, and Hollow Knight: Silksong is one of my top favorites. Using complimentary colors, the background is various shades of green with some key characters blending in as part of it, while the main star of the game stands out strongly in red, up front with strong lighting hitting her.",
    url: null,
    repo: null,
    id: "silksong",
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
];
