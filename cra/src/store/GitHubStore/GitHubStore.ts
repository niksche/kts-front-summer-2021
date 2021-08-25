import ApiStore from '../../shared/store/ApiStore';
import { ApiResponse, HTTPMethod, RepoItem, RequestParams } from '../../shared/store/ApiStore/types';
import {GetOrganizationReposListParams, IGitHubStore} from "./types";
// import RequestParams from '../../shared/store/types'


export default class GitHubStore implements IGitHubStore {
    private readonly apiStore = new ApiStore(`https://api.github.com/`); // TODO: не забудьте передать baseUrl в конструктор

    async getOrganizationReposList(params: GetOrganizationReposListParams): Promise<ApiResponse<RepoItem[], any>> {
        return await this.apiStore.request({
            method: HTTPMethod.GET,
            endpoint: `orgs/${params.organizationName}/repos`,
            headers: {},
            data: "",
        });
        
        
        // TODO: Здесь сделайте вызов из this.apiStore и верните результат
        // Документация github: https://docs.github.com/en/rest/reference/repos#list-organization-repositories
    }
}


