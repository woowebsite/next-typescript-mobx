import IBaseModel from '../models/IBaseModel'
import {AxiosResponse} from 'axios';

export default interface BaseRepository<T extends IBaseModel> {
    getAll: (params: any) => Promise<AxiosResponse<T[]>>;
    get: (id) => Promise<AxiosResponse<T>>;
    create: (T)=> Promise<AxiosResponse<T>>;
    update:(id, T)=> Promise<AxiosResponse<T>>;
    delete: (id) => Promise<AxiosResponse<T>>;
}