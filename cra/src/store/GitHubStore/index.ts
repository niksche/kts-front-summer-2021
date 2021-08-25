import { HTTPMethod, RequestParams } from '../../shared/store/ApiStore/types';
import GitHubStore from './GitHubStore';

export {default} from './GitHubStore';


let ex : GitHubStore;


let pr : RequestParams<string> = {
    data: '',
    endpoint: '',
    headers: {},
    method: HTTPMethod.GET
}

ex.getOrganizationReposList(pr);