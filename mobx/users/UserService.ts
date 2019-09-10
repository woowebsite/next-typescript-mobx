import User from "./UserModel";
import IUserService from './IUserService'
import axios, {AxiosResponse} from 'axios';

export default class UserService extends IUserService {
    getUserByUsername = (username: string): Promise<AxiosResponse<User>> => {
        return axios.get<User, AxiosResponse<User>>(username)
    }
}