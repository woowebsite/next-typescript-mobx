import IBaseModel from '../../base/models/IBaseModel'

interface IUser extends IBaseModel {
    firstName: string;
    lastName: string;
    sex: boolean;
    birthday: Date;
    status: string;
    getFullName: ()=> string;
}


class User implements IUser {
    id: number;
    displayName: string;
    firstName: string;
    lastName: string;
    sex: boolean;
    status: string;
    birthday: Date;
    getFullName: () => `${this.firstName} ${this.lastName}`;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
export default User