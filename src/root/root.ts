// Демонстрация создания и использования GitHubStore

import GitHubStore from "../store/GitHubStore/GitHubStore";

const gitHubStore = new GitHubStore();

const EXAMPLE_ORGANIZATION = "ktsstudio";

gitHubStore
  .getOrganizationReposList({
    organizationName: EXAMPLE_ORGANIZATION,
  })
  .then((result) => {

    if (result.success) {
      { /* eslint-disable-next-line no-console */ }
      console.log(result.data.map(repo => {
        return [repo.name, repo.id, repo.url];
      }));

    }
    const infD = result
  });
