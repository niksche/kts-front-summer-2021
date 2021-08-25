import ApiStore from '../../shared/store/ApiStore';
import { HTTPMethod, RequestParams } from '../../shared/store/ApiStore/types';
import {IGitHubStore} from "./types";
// import RequestParams from '../../shared/store/types'


export default class GitHubStore implements IGitHubStore {
    private readonly apiStore = new ApiStore(`https://api.github.com/`); // TODO: не забудьте передать baseUrl в конструктор

    async getOrganizationReposList(organizationName: string): Promise<ApiResponse<RepoItem[]>> {
        let req = await this.apiStore.request({
            method: HTTPMethod.GET,
            endpoint: `orgs/${organizationName}/repos`,
            headers: "",
            data: "",
        });
        return req.data;
        
        // TODO: Здесь сделайте вызов из this.apiStore и верните результат
        // Документация github: https://docs.github.com/en/rest/reference/repos#list-organization-repositories
    }
}


