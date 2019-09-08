import Axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

//https://jsonplaceholder.typicode.com
export interface SetupProps {
    baseUrl: string
}

/**
 *
 * Described the RxAx methods
 * @interface IRxAx
 */
interface IBaseService {
    config: (config: AxiosRequestConfig) => AxiosRequestConfig;
    request: <T = any>(config: AxiosRequestConfig) => AxiosResponse<T>;
    get: <T = any>(
        url: string,
        config?: AxiosRequestConfig,
    ) => AxiosResponse<T>;
    // delete: <T = any>(
    //   url: string,
    //   config?: AxiosRequestConfig,
    // ) => Observable<AxiosResponse<T>>;
    // head: <T = any>(
    //   url: string,
    //   config?: AxiosRequestConfig,
    // ) => Observable<AxiosResponse<T>>;
    // post: <T = any>(
    //   url: string,
    //   data?: any,
    //   config?: AxiosRequestConfig,
    // ) => Observable<AxiosResponse<T>>;
    // put: <T = any>(
    //   url: string,
    //   data?: any,
    //   config?: AxiosRequestConfig,
    // ) => Observable<AxiosResponse<T>>;
    // patch: <T = any>(
    //   url: string,
    //   data?: any,
    //   config?: AxiosRequestConfig,
    // ) => Observable<AxiosResponse<T>>;
}
export class BaseService implements IBaseService {
    constructor(private readonly instance: AxiosInstance = Axios) { }
    /**
     *
     * Return config for Axios
     *
     * @param {AxiosRequestConfig} config
     */
    public config(config: AxiosRequestConfig): AxiosRequestConfig {
        return config;
    }
}