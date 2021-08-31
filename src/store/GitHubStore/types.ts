import { ApiResponse, RepoItem } from "../../shared/store/ApiStore/types";

/** Интерфейс класса для работы с GitHub API
 */

export type GetOrganizationReposListParams = {
  organizationName: string;
};

export interface IGitHubStore {
  getOrganizationReposList(
    params: GetOrganizationReposListParams
  ): Promise<ApiResponse<RepoItem[], any>>;
}
