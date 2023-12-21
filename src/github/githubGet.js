const { Octokit } = require("@octokit/core");

const TOKEN = "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";
const USERNAME = "daniel-shliakhetko";

//config.get("gitHubToken");

const octokit = new Octokit({ auth: TOKEN });

export const getRepositories = async () => {
  return octokit
    .request(`GET /users/${USERNAME}/repos`, {
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.warn(err);
    });
};

export const getRepositoryAdditional = (url) => {
  return fetch(url).then((res) => res).catch(err=>console.warn(err));
};

// const camelize = (s) => s.replace(/-./g, (x) => x[1].toUpperCase());