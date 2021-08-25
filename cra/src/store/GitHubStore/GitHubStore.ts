import ApiStore from '../../shared/store/ApiStore';
import { RequestParams } from '../../shared/store/ApiStore/types';
import {IGitHubStore} from "./types";
// import RequestParams from '../../shared/store/types'


export default class GitHubStore implements IGitHubStore {
    private readonly apiStore = new ApiStore("https://api.github.com/orgs/google/repos"); // TODO: не забудьте передать baseUrl в конструктор

    async getOrganizationReposList(params: RequestParams<string>): Promise<ApiResponse<RepoItem[]>> {
        let req = await this.apiStore.request(params);
        return req.data;
        
        // TODO: Здесь сделайте вызов из this.apiStore и верните результат
        // Документация github: https://docs.github.com/en/rest/reference/repos#list-organization-repositories
    }
}


