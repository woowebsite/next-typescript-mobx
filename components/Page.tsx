import React from 'react'
import { inject, observer } from 'mobx-react'

interface Props {
  title: string,
  store: any
}

@inject('store') @observer
class Page extends React.Component<Props> {
  componentDidMount () {
    this.props.store.start()
  }

  componentWillUnmount () {
    this.props.store.stop()
  }

  render () {
    return (
      <div>
        <h1>{this.props.title} - {this.props.store.lastUpdate}</h1>
      </div>
    )
  }
}

export default Page
