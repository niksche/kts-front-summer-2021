import {ApiResponse, IApiStore, RequestParams, StatusHTTP} from "./types";

export default class ApiStore implements IApiStore {
    readonly baseUrl: string;
    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    request<SuccessT, ErrorT = any, ReqT = {}>(params: RequestParams<ReqT>): Promise<ApiResponse<SuccessT, ErrorT>> {  
        return fetch(params.endpoint, {
            method: params.method,
            headers: params.headers,
            body: JSON.stringify(params.data)
        }).then((res) => {
            return res.json()
        })
    }
}