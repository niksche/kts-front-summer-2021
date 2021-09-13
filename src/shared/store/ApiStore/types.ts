// Перечисление методов HTTP-запроса
export enum HTTPMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
};

// Параметры запроса
export type RequestParams<ReqT> = {
  method: HTTPMethod; // Метод запроса, GET или POST
  endpoint: string; // API-endpoint, на который делается запрос
  headers: Record<string, string>; // Объект с передаваемыми HTTP-заголовками

  /**
   * Объект с данными запроса.
   * - Для GET-запроса данные превращаются в query-строку и добавляются в endpoint
   * - Для POST-запроса данные преобразуются к формату JSON и добавляются в тело запроса (необязательное требование)
   */
  data: ReqT;
};

// Перечисление статусов ответа
export enum StatusHTTP {
  "UNEXPECTED_ERROR" = "UNEXPECTED_ERROR",
  "OK" = 200,
  "FAILED",
};
export type GithubRepoOwner = {
  id: number,
  url: string,
  login: string
};

export type RepoItem = {
  id: number,
  url: string,
  name: string,
  stargazers_count: number
};


export type RepoInfo = {
  id: number,
  url: string,
  name: string,
  description: string
  stargazers_count: number
};


// Ответ API
export type ApiResponse<SuccessT, ErrorT> =
  | {
    success: true;
    data: SuccessT;
    status: StatusHTTP;
  }
  | {
    success: false;
    data: ErrorT;
    status: StatusHTTP;
  }
  | {
    success: false;
    data: any;
    status: StatusHTTP;
  };

// Интерфейс для класса, с помощью которого можно делать запросы к API
export interface IApiStore {
  // базовый url для выполнения запросов. TODO: указать url GitHub API в классе ApiStore
  readonly baseUrl: string;

  // Метод, с помощью которого делается запрос. TODO: реализовать в классе ApiStore
  request<SuccessT, ErrorT = any, ReqT = {}>(
    params: RequestParams<ReqT>
  ): Promise<ApiResponse<SuccessT, ErrorT>>;
}
