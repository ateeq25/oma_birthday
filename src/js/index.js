
import "../styles/main.css";
import "../styles/sections/hero.css";
import "../styles/sections/letter.css";
import "../styles/sections/many-colours.css";
import "./../styles/sections/moments.css";
import "../styles/sections/wishes.css";
import "../styles/sections/finale.css";

import createFinale from "./sections/finale.js";
import createWishes from "./sections/wishes.js";
import createMoments from "./sections/moments.js";
import createManyColours from "./sections/many-colours.js";
import createHero from "./sections/hero.js";
import createLetter from "./sections/letter.js";

const content = document.querySelector("#content");

content.appendChild(createHero());
content.appendChild(createLetter());
content.appendChild(createManyColours());
content.appendChild(createMoments());
content.appendChild(createWishes());
content.appendChild(createFinale());