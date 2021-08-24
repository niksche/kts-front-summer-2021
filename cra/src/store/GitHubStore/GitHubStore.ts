import ApiStore from '../../shared/store/ApiStore';
import {IGitHubStore} from "./types";
import RequestParams from '../../shared/store/types';

export default class GitHubStore implements IGitHubStore {
    private readonly apiStore = new ApiStore("/"); // TODO: не забудьте передать baseUrl в конструктор



    // TODO: реализовать интерфейс IGitHubStore


    
    async getOrganizationReposList(params: RequestParams<string>): Promise<ApiResp<RepoItem[]>> {
        return this.apiStore.request(params).then((res) => {
            return res;
        })
        // TODO: Здесь сделайте вызов из this.apiStore и верните результат
        // Документация github: https://docs.github.com/en/rest/reference/repos#list-organization-repositories
    }
}


