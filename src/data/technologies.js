import html from "../images/technologies/html.png";
import css from "../images/technologies/css.png";
import js from "../images/technologies/js.png";
import react from "../images/technologies/react.png";
import redux from "../images/technologies/redux.png";
import sass from "../images/technologies/sass.png";
import tailwind from "../images/technologies/tailwind.png";
import bootstrap from "../images/technologies/bootstrap.png";
import firebase from "../images/technologies/firebase.png";
import wordpress from "../images/technologies/wordpress.png";
import php from "../images/technologies/php.png";
import mongodb from "../images/technologies/mongodb.png";
import express from "../images/technologies/express.png";
import nodejs from "../images/technologies/nodejs.png";
import jquery from "../images/technologies/jquery.png";

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
    slug: "html",
    type: technologiesTypes.BIG,
    thumbnail: html,
    description: "",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    level: technologiesLevels.STRONG,
  },
  {
    title: "CSS",
    slug: "css",
    type: technologiesTypes.BIG,
    thumbnail: css,
    description: "",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    level: technologiesLevels.STRONG,
  },
  {
    title: "JavaScript",
    slug: "js",
    type: technologiesTypes.BIG,
    thumbnail: js,
    description: "",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    level: technologiesLevels.STRONG,
  },
  {
    title: "React",
    slug: "react",
    type: technologiesTypes.BIG,
    thumbnail: react,
    description: "",
    link: "https://react.dev",
    level: technologiesLevels.STRONG,
  },
  {
    title: "Redux",
    slug: "redux",
    type: technologiesTypes.MEDIUM,
    thumbnail: redux,
    description: "",
    link: "https://redux.js.org",
    level: technologiesLevels.GOOD,
  },
  {
    title: "SASS",
    slug: "sass",
    type: technologiesTypes.SMALL,
    thumbnail: sass,
    description: "",
    link: "https://sass-lang.com/documentation/",
    level: technologiesLevels.STRONG,
  },
  {
    title: "Tailwind CSS",
    slug: "tailwind",
    type: technologiesTypes.MEDIUM,
    thumbnail: tailwind,
    description: "",
    link: "https://tailwindcss.com",
    level: technologiesLevels.GOOD,
  },
  {
    title: "Bootstrap",
    slug: "bootstrap",
    type: technologiesTypes.MEDIUM,
    thumbnail: bootstrap,
    description: "",
    link: "https://getbootstrap.com",
    level: technologiesLevels.BASIC,
  },
  {
    title: "Firebase",
    slug: "firebase",
    type: technologiesTypes.MEDIUM,
    thumbnail: firebase,
    description: "",
    link: "https://firebase.google.com",
    level: technologiesLevels.BASIC,
  },
  {
    title: "mongoDb",
    slug: "mongodb",
    type: technologiesTypes.BASIC,
    thumbnail: mongodb,
    description: "",
    link: "https://www.mongodb.com",
    level: technologiesLevels.BASIC,
  },
  {
    title: "NodeJs",
    slug: "nodejs",
    type: technologiesTypes.MEDIUM,
    thumbnail: nodejs,
    description: "",
    link: "https://nodejs.org/en/about",
    level: technologiesLevels.GOOD,
  },
  {
    title: "Express",
    slug: "express",
    type: technologiesTypes.BIG,
    thumbnail: express,
    description: "",
    link: "https://expressjs.com",
    level: technologiesLevels.BASIC,
  },
  {
    title: "WordPress",
    slug: "wordpress",
    type: technologiesTypes.BIG,
    thumbnail: wordpress,
    description: "",
    link: "https://wordpress.org",
    level: technologiesLevels.BASIC,
  },
  {
    title: "PHP",
    slug: "php",
    type: technologiesTypes.BIG,
    thumbnail: php,
    description: "",
    link: "https://www.php.net",
    level: technologiesLevels.BASIC,
  },
  {
    title: "jQuery",
    slug: "jquery",
    type: technologiesTypes.MEDIUM,
    thumbnail: jquery,
    description: "",
    link: "https://jquery.com",
    level: technologiesLevels.BASIC,
  },
];

export default technologies;
