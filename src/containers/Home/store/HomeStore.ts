import { makeAutoObservable } from 'mobx'

class HomeStore {
  text = 'test'
  constructor() {
    makeAutoObservable(this)
  }
}

export default HomeStore
