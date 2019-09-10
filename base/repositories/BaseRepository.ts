import axios, {AxiosResponse} from 'axios';
import IBaseRepository from './IBaseRepository'
import IBaseModel from '../models/IBaseModel';

const baseUrl = "https://jsonplaceholder.typicode.com"  //  baseURL: process.env.VUE_APP_API_URL

export default abstract class BaseRepository<T extends IBaseModel> implements IBaseRepository<T> {
    getAll(params: any): Promise<AxiosResponse<T[]>>{
        return axios.get<T, AxiosResponse<T[]>>(`${baseUrl}/${params}`)
    }
    get(id: string | number): Promise<AxiosResponse<T>>{
        return axios.get<T, AxiosResponse<T>>(`${baseUrl}/${id}`)
    }
    create(t: T): Promise<AxiosResponse<T>>{
        return axios.post<T, AxiosResponse<T>>(baseUrl, t)
    }
    update(id: string | number, t: T): Promise<AxiosResponse<T>>{
        return axios.put<T, AxiosResponse<T>>(`${baseUrl}/${id}`, t)
    }
    delete(id: string | number) :Promise<AxiosResponse<T>> {
        return axios.delete<T, AxiosResponse<T>>(`${baseUrl}/${id}`)
    }
}