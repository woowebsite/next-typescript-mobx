import User from "./UserModel";
import {AxiosResponse} from 'axios';
import BaseRepository from "../../base/repositories/BaseRepository";

export default class IUserService extends BaseRepository<User> {
    getUserByUsername: (username: string) => Promise<AxiosResponse<User>>;
}