import html from "../images/html.png";
import css from "../images/css.png";
import js from "../images/js.png";
import react from "../images/react.png";
import redux from "../images/redux.png";
import sass from "../images/sass.png";
import tailwind from "../images/tailwind.png"
import bootstrap from "../images/bootstrap.png";

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
    type: technologiesTypes.BIG,
    thumbnail: html,
    description: "",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    level: technologiesLevels.STRONG,
  },
  {
    title: "CSS",
    type: technologiesTypes.BIG,
    thumbnail: css,
    description: "",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    level: technologiesLevels.STRONG,
  },
  {
    title: "JavaScript",
    type: technologiesTypes.BIG,
    thumbnail: js,
    description: "",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    level: technologiesLevels.STRONG,
  },
  {
    title: "React",
    type: technologiesTypes.BIG,
    thumbnail: react,
    description: "",
    link: "https://react.dev",
    level: technologiesLevels.STRONG,
  },
  {
    title: "Redux",
    type: technologiesTypes.MEDIUM,
    thumbnail: redux,
    description: "",
    link: "https://redux.js.org",
    level: technologiesLevels.GOOD,
  },
  {
    title: "SASS",
    type: technologiesTypes.SMALL,
    thumbnail: sass,
    description: "",
    link: "https://sass-lang.com/documentation/",
    level: technologiesLevels.STRONG,
  },
  {
    title: "Tailwind CSS",
    type: technologiesTypes.MEDIUM,
    thumbnail: tailwind,
    description: "",
    link: "https://tailwindcss.com",
    level: technologiesLevels.GOOD,
  },
  {
    title: "Bootstrap",
    type: technologiesTypes.MEDIUM,
    thumbnail: bootstrap,
    description: "",
    link: "https://getbootstrap.com",
    level: technologiesLevels.BASIC,
  },
];

export default technologies;
