import { ApiResponse, RepoInfo, RepoItem } from "../../shared/store/ApiStore/types";

/** Интерфейс класса для работы с GitHub API
 */

export type GetOrganizationReposListParams = {
  organizationName: string;
};

export type GetOrganizationRepoByName = {
  organizationName: string;
  repoName: string;
};

export interface IGitHubStore {
  getOrganizationReposList(
    params: GetOrganizationReposListParams
  ): Promise<ApiResponse<RepoItem[], any>>;

  getOrganizationRepoByName(
    params: GetOrganizationRepoByName
  ): Promise<ApiResponse<RepoInfo, any>>;
}
