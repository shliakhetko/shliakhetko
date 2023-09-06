import clothingBullet from "../images/projects/clothing-bullet.png";
import italianFood from "../images/projects/italian-food.png";
import zymeriaConcert from "../images/projects/zymeria-concert.png";
import tradeCrypto from "../images/projects/trade-crypto.png";
import vibo from "../images/projects/vibo.png";
import leonAgency from "../images/projects/leon-agency.png";

export const gitHubProjects = [
  {
    name: "clothing-bullet",
    image: clothingBullet,
    stack: ["react", "tailwind"],
    isTurned: false,
    scrollTime: 5,
  },
  {
    name: "italian-food",
    image: italianFood,
    stack: ["html", "sass", "js", "bootstrap"],
    isTurned: false,
    scrollTime: 5,
  },
  {
    name: "zyemira-concert",
    image: zymeriaConcert,
    stack: ["html", "sass", "js", "bootstrap"],
    isTurned: false,
    scrollTime: 5,
  },
  {
    name: "trade-crypto",
    image: tradeCrypto,
    stack: ["html", "sass", "js", "bootstrap"],
    isTurned: false,
    scrollTime: 5,
  },
  {
    name: "vibo",
    image: vibo,
    stack: ["html", "sass", "js", "bootstrap"],
    isTurned: false,
    scrollTime: 5,
  },
  {
    name: "leon-agency",
    image: leonAgency,
    stack: ["html", "sass", "js", "bootstrap"],
    isTurned: false,
    scrollTime: 5,
  },
];
export const otherProjects = [];

export const getInfoFromRepositories = (repositories) => {
  return gitHubProjects.map((item) => {
    const fileredRepositories = repositories.filter(
      (repository) => item.name === repository.name
    );
    const repository = fileredRepositories.length > 0 && fileredRepositories[0];
    if (!repository) return null;

    const { description, homepage, topics } = repository;
    const gitHublUrl = repository["html_url"];
    const languagesUrl = repository["languages_url"];

    const neededInfo = {
      description,
      homepage,
      gitHublUrl,
      topics,
      languagesUrl,
    };

    return fileredRepositories.length > 0 && Object.assign(item, neededInfo);
  });
};
