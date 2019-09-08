import { action, observable } from 'mobx'
import UserModel from './UserModel'
let userStore = null

export class UserStore {
  @observable users: UserModel[] = []

 
  @action getAll = () => {

  }

  @action get = () => {

  }

  @action create = () => {
    
  }

  @action delete = () => {
    
  }

  @action update = () => {
    
  }
}

export function initializeStore () {
  return userStore
}
