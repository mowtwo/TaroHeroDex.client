import { Component } from 'react'
import { Provider } from 'mobx-react'

import counterStore from './store/counter'

import './app.scss'

const store = {
  counterStore
}

class App extends Component {
  // this.props.children 就是要渲染的页面
  render () {
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    )
  }
}

export default App
