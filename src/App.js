import React from 'react'
import Body from './Components/Body'
import Head from './Components/Head'
import store from './Components/utils/store'
import { Provider } from 'react-redux'
const App = () => {
  return (
    <Provider store={store}>
    <div>
      <Head/>
      <Body/>
    </div>
    </Provider>
  )
}

export default App