import { action, observable } from 'mobx'

let store1 = null

export class Store {
  @observable lastUpdate = Date.now()
  @observable light = false

  constructor (isServer, lastUpdate) {
    this.lastUpdate = lastUpdate
  }

  @action start = () => {
    this.timer = setInterval(() => {
      this.lastUpdate = Date.now()
      this.light = true
    }, 1000)
  }

  stop = () => clearInterval(this.timer)
}

export function initializeStore (isServer, lastUpdate = Date.now()) {
  if (isServer) {
    return new Store(isServer, lastUpdate)
  } else {
    if (store1 === null) {
      store1 = new Store(isServer, lastUpdate)
    }
    return store1
  }
}
