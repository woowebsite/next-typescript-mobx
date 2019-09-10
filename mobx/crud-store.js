import { action, observable } from 'mobx'

let store1 = null

export class CrudStore {
  @observable entity = Object

  constructor () {
    this.entity = []
  }

  @action getData = (filter) => {
    console.log("Function getData is calling...");
    
  }

}
export default new CrudStore()
