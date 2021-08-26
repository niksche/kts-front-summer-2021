import ApiStore from '../../shared/store/ApiStore';
import { ApiResponse, HTTPMethod, RepoItem, RequestParams } from '../../shared/store/ApiStore/types';
import {GetOrganizationReposListParams, IGitHubStore} from "./types";


export default class GitHubStore implements IGitHubStore {
    private readonly apiStore = new ApiStore(`https://api.github.com/`);

    async getOrganizationReposList(params: GetOrganizationReposListParams): Promise<ApiResponse<RepoItem[], any>> {
        return await this.apiStore.request({
            method: HTTPMethod.GET,
            endpoint: `orgs/${params.organizationName}/repos`,
            headers: {},
            data: "",
        });
    }
}
