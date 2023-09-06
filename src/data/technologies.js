import html from "../images/technologies/html.png";
import css from "../images/technologies/css.png";
import js from "../images/technologies/js.png";
import react from "../images/technologies/react.png";
import redux from "../images/technologies/redux.png";
import sass from "../images/technologies/sass.png";
import tailwind from "../images/technologies/tailwind.png"
import bootstrap from "../images/technologies/bootstrap.png";

export const technologiesTypes = {
  BIG: { type: "BIG" },
  MEDIUM: { type: "MEDIUM" },
  SMALL: { type: "SMALL" },
};

export const technologiesLevels = {
  STRONG: { type: "STRONG", text: "strong-level", color: "blueViolet" },
  GOOD: { type: "GOOD", text: "good-level", color: "orangeRed" },
  BASIC: { type: "BASIC", text: "basic-level", color: "sandyBrown" },
  LEARNING: { type: "LEARNING", text: "learning", color: "yellowGreen" },
};

const technologies = [
  {
    title: "HTML",
    slug:"html",
    type: technologiesTypes.BIG,
    thumbnail: html,
    description: "",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    level: technologiesLevels.STRONG,
  },
  {
    title: "CSS",
    slug:"css",
    type: technologiesTypes.BIG,
    thumbnail: css,
    description: "",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    level: technologiesLevels.STRONG,
  },
  {
    title: "JavaScript",
    slug:"js",
    type: technologiesTypes.BIG,
    thumbnail: js,
    description: "",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    level: technologiesLevels.STRONG,
  },
  {
    title: "React",
    slug:"react",
    type: technologiesTypes.BIG,
    thumbnail: react,
    description: "",
    link: "https://react.dev",
    level: technologiesLevels.STRONG,
  },
  {
    title: "Redux",
    slug:"redux",
    type: technologiesTypes.MEDIUM,
    thumbnail: redux,
    description: "",
    link: "https://redux.js.org",
    level: technologiesLevels.GOOD,
  },
  {
    title: "SASS",
    slug:"sass",
    type: technologiesTypes.SMALL,
    thumbnail: sass,
    description: "",
    link: "https://sass-lang.com/documentation/",
    level: technologiesLevels.STRONG,
  },
  {
    title: "Tailwind CSS",
    slug:"tailwind",
    type: technologiesTypes.MEDIUM,
    thumbnail: tailwind,
    description: "",
    link: "https://tailwindcss.com",
    level: technologiesLevels.GOOD,
  },
  {
    title: "Bootstrap",
    slug:"bootstrap",
    type: technologiesTypes.MEDIUM,
    thumbnail: bootstrap,
    description: "",
    link: "https://getbootstrap.com",
    level: technologiesLevels.BASIC,
  },
];

export default technologies;
