import {ApiResponse, HTTPMethod, IApiStore, RequestParams, StatusHTTP} from "./types";

export default class ApiStore implements IApiStore {
    readonly baseUrl: string;
    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    async request<SuccessT, ErrorT = any, ReqT = {}>(params: RequestParams<ReqT>): Promise<ApiResponse<SuccessT, ErrorT>> {  
        let queryParam = '';
        if (params.method === HTTPMethod.GET) {
            queryParam = qs.stringify(params.data);
        }

        let data = '';
        if (params.method === HTTPMethod.POST) {
            data = JSON.stringify(params.data);
        }

        let endpoint : string = `${this.baseUrl}${params.endpoint}${queryParam}`;

        let shit : Record<string, string> {
            "Content-Type" : "application/json"
            ...params.headers,
        }
        let response = await fetch(endpoint, {
            method: params.method,
            headers: params.headers,
            body: data
        })

        if (response.ok) {
            let answ = await response.json();

            return {
                success:true,
                data: answ,
                status: response.status,
            }
        }

        if (response.status != 200) {
            return {
                success: false,
                data: '',
                status: response.status,
            }
        }
    }
}