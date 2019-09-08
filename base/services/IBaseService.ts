import IBaseModel from '../models/IBaseModel'

export interface IBaseService {
    getAll: () => IBaseModel[];
    get: (id) => IBaseModel;
    create: (IBaseModel)=> IBaseModel;
    update:(id, IBaseModel)=> void;
    delete: (id) => void;
}