import App, {Container} from 'next/app'
import React from 'react'
import { Store } from '../mobx/store'
import { CrudStore } from '../mobx/crud-store'
import withMobxStore from '../mobx/with-mobx-store'
import { Provider } from 'mobx-react'

interface Props {
  mobxStore: any
}
class MyApp extends App<Props> {
  render () {
    const rootStores = { 
      originStore: new Store(),
      crudStore: new CrudStore()
    }
    const {Component, mobxStore} = this.props
    
    return (
      <Container>
        <Provider store={mobxStore}>
          <Component {...rootStores} />
        </Provider>
      </Container>
    )
  }
}

export default withMobxStore(MyApp)
